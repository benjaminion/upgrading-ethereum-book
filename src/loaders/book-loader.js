import fs from 'fs';
import { fileURLToPath } from 'node:url';

// Split monolithic book source file into individual markdown pages.

// This matches the page divisions in the Markdown file
const regex =
  /^(?<level>#{1,3}) (?<title>.+) <!-- (?<path>\/.*\/)(?<hide>\*?) -->$/gm;

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
  render,
  generateDigest,
  logger,
  isWatcherUpdate,
) {
  // Only do search index processing when we are rebuilding from scratch.
  // We don't really maintain the search index when doing partial reloads.
  const doSearch = store.keys().length === 0;
  logger.debug((doSearch ? 'Rebuilding' : 'Not rebuilding') + ' search index');

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
        return { path: m.groups.path, reload: false };
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
        search: doSearch,
      };

      // Validate the frontmatter data against the collection schema
      // Beware that it will silently filter out any properties not defined in the schema
      const data = await parseData({
        id: m.groups.path,
        data: frontmatter,
      });

      const rendered = await render({
        id: m.groups.path,
        data: frontmatter,
        body: markdown,
        filePath: m.groups.path,
        digest: digest,
      });

      store.set({
        id: m.groups.path,
        data: data,
        body: markdown,
        digest: digest,
        rendered: rendered,
      });

      return { path: m.groups.path, reload: true };
    }),
  )
    .then((pages) => {
      // Print a summary of the outcome
      logger.info(`Total pages read: ${pages.length}`);
      logger.info(
        `Total pages reloaded: ${pages.filter((x) => x.reload).length}`,
      );
      return pages.map((page) => page.path);
    })
    .then((paths) => {
      // Remove any stale paths from the store
      const storePaths = store.keys();
      logger.debug(
        `Store paths: actual ${storePaths.length}, expected ${paths.length}`,
      );
      if (storePaths.length > paths.length) {
        new Set(storePaths).difference(new Set(paths)).forEach((path) => {
          logger.debug(`Deleting stale path ${path} from store`);
          store.delete(path);
        });
      }
    });
}

export function bookLoader(fileName) {
  return {
    name: 'book-loader',
    load: async ({
      collection,
      store,
      parseData,
      generateDigest,
      config,
      watcher,
      logger,
      entryTypes,
    }) => {
      const filePath = fileURLToPath(new URL(fileName, config.root));
      logger.debug(`FilePath: ${filePath}`);

      const render = await entryTypes.get('.md').getRenderFunction(config);

      logger.info(`Reading ${collection} from ${fileName}`);
      await syncBook(
        fileName,
        store,
        parseData,
        render,
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
            render,
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
