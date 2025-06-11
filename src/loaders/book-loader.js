import fs from 'fs';
import { fileURLToPath } from 'node:url';

// Split monolithic book source file into individual markdown pages.

// This matches the page divisions in the Markdown file
const regex =
  /^(?<level>#{1,3}) (?<title>.+) <!-- (?<path>\/.*\/)(?<hide>\*?) -->$/gm;

// Note that this relies on modifying the astro package to add an `opts` argument
// to `.render` (see ../patches) in order to get the frontmatter correctly propagated.
//
// I can't find an "official" way to do this. Prepending synthetic frontmatter before
// doing renderMarkdown does not work.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Wait until the file size is stable to avoid a race condition when a reload is
// triggered by a watcher before the file has finished writing.
async function waitForFile(fileName, logger) {
  const maxStableCount = 3;
  const intervalTime = 10;
  let stableCount = 0;
  let newSize = fs.statSync(fileName).size;
  while (stableCount < maxStableCount) {
    let oldSize = newSize;
    newSize = await delay(intervalTime).then(() => fs.statSync(fileName).size);
    logger.debug(
      `Waiting: oldSize = ${oldSize}, newSize = ${newSize}, stableCount = ${stableCount}`,
    );
    stableCount = newSize === oldSize ? stableCount + 1 : 0;
  }
}

async function syncBook(
  fileName,
  store,
  parseData,
  renderMarkdown,
  generateDigest,
  logger,
  isWatcherUpdate,
) {
  let allMarkdown;
  try {
    logger.debug(`Reading Markdown from ${fileName}`);
    if (isWatcherUpdate) {
      await waitForFile(fileName, logger);
    }
    allMarkdown = fs.readFileSync(fileName, 'utf8');
    if (!allMarkdown) {
      logger.warn(`Read empty file from ${fileName}`);
    }
  } catch (error) {
    logger.error('Failed to read input file ' + fileName);
    throw error;
  }

  const t = {
    part: '',
    chapter: '',
    section: '',
    partNo: -1, // Number parts from 0
    chapterNo: 0,
    sectionNo: 0,
    index: [],
  };

  Promise.all(
    [...allMarkdown.matchAll(regex)].map(async (m, i, allMatches) => {
      switch (m.groups.level) {
        case '#':
          t.part = m.groups.title;
          t.chapter = '';
          t.section = '';
          t.partNo++;
          t.chapterNo = 0;
          t.index = [t.partNo];
          break;
        case '##':
          t.chapter = m.groups.title;
          t.section = '';
          t.chapterNo++;
          t.sectionNo = 0;
          t.index = [t.partNo, t.chapterNo];
          break;
        case '###':
          t.section = m.groups.title;
          t.sectionNo++;
          t.index = [t.partNo, t.chapterNo, t.sectionNo];
          break;
        default:
          throw 'Something broke while splitting up the pages.';
      }

      let headings = '';
      if (t.section) {
        headings =
          `<div class="section-header">` +
          `<h1 class="no-anchor">${t.part}</h1>` +
          `<h2 class="no-anchor">${t.chapter}</h2>` +
          `</div>\n\n`;
      } else if (t.chapter) {
        headings =
          `<div class="chapter-header">` +
          `<h1 class="no-anchor">${t.part}</h1>` +
          `</div>\n\n`;
      }

      const markdown =
        headings + allMarkdown.substring(m.index, allMatches[i + 1]?.index);

      const digest = generateDigest(markdown);
      if (store.get(m.groups.path)?.digest === digest) {
        logger.debug(`Not reloading ${m.groups.path}`);
        return false;
      }

      if (isWatcherUpdate) {
        logger.info(`Reloading ${m.groups.path}`);
      } else {
        logger.debug(`Reloading ${m.groups.path}`);
      }

      const frontmatter = {
        path: m.groups.path,
        hide: m.groups.hide === '*',
        titles: [t.part, t.chapter, t.section].filter((x) => x),
        index: t.index,
        sequence: i + 1,
      };

      // Validate the frontmatter data against the collection schema
      // Beware that it will silently filter out any properties not defined in the schema
      const data = await parseData({
        id: m.groups.path,
        data: frontmatter,
      });

      // Use the hacked version - I'd love to avoid this!
      const rendered = await renderMarkdown(markdown, {
        frontmatter: frontmatter,
        fileURL: m.groups.path,
      });
      // const rendered = await renderMarkdown(markdown);

      store.set({
        id: m.groups.path,
        data: data,
        body: markdown,
        digest: digest,
        rendered: rendered,
      });

      return true;
    }),
  ).then((count) => {
    logger.info(`Total pages read: ${count.length}`);
    logger.info(`Total pages reloaded: ${count.filter((x) => x).length}`);
  });
}

export function bookLoader(fileName) {
  return {
    name: 'book-loader',
    load: async ({
      collection,
      store,
      parseData,
      renderMarkdown,
      generateDigest,
      config,
      watcher,
      logger,
    }) => {
      const filePath = fileURLToPath(new URL(fileName, config.root));
      logger.debug(`FilePath: ${filePath}`);

      logger.info(`Reading ${collection} from ${fileName}`);
      await syncBook(
        fileName,
        store,
        parseData,
        renderMarkdown,
        generateDigest,
        logger,
        false,
      );

      watcher?.on('change', async (changedPath) => {
        if (changedPath === filePath) {
          logger.info(`Reloading ${collection} from ${fileName}`);
          await syncBook(
            fileName,
            store,
            parseData,
            renderMarkdown,
            generateDigest,
            logger,
            true,
          );
        } else {
          logger.debug(
            `Not reloading ${collection} due to change in ${changedPath}`,
          );
        }
      });
    },
  };
}
