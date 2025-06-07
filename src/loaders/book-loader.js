import fs from 'fs';

// Split monolithic book source file into individual markdown pages.

// This matches the page divisions in the Markdown file
const regex =
  /^(?<level>#{1,3}) (?<title>.+) <!-- (?<path>\/.*\/)(?<hide>\*?) -->$/gm;

// Note that this relies on modifying the astro package to add an `opts` argument
// to `.render` (see ../patches) in order to get the frontmatter correctly propagated.
//
// I can't find an "official" way to do this. Prepending synthetic frontmatter before
// doing renderMarkdown does not work.

export function bookLoader(fileName) {
  return {
    name: 'book-loader',
    load: async ({ store, parseData, renderMarkdown, logger }) => {
      logger.info('Reading pages from ' + fileName);

      let allMarkdown = '';
      try {
        allMarkdown = await fs.readFileSync(fileName, 'utf8');
      } catch (error) {
        console.error('Failed to read input file ' + fileName);
        throw error;
      }

      const matches = [];
      let m;
      while ((m = regex.exec(allMarkdown)) !== null) {
        matches.push({ ...m.groups, index: m.index });
      }

      logger.info('Read ' + matches.length + ' pages');

      store.clear();

      const t = {
        part: '',
        chapter: '',
        section: '',
        partNo: -1, // Number parts from 0
        chapterNo: 0,
        sectionNo: 0,
        index: [],
      };

      for (let i = 0; i < matches.length; i++) {
        const m = matches[i];
        switch (m.level) {
          case '#':
            t.part = m.title;
            t.chapter = '';
            t.section = '';
            t.partNo++;
            t.chapterNo = 0;
            t.index = [t.partNo];
            break;
          case '##':
            t.chapter = m.title;
            t.section = '';
            t.chapterNo++;
            t.sectionNo = 0;
            t.index = [t.partNo, t.chapterNo];
            break;
          case '###':
            t.section = m.title;
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
          headings + allMarkdown.substring(m.index, matches[i + 1]?.index);

        const frontmatter = {
          path: m.path,
          hide: m.hide === '*',
          titles: [t.part, t.chapter, t.section].filter((x) => x),
          index: t.index,
          sequence: i + 1,
        };

        // Validate the frontmatter data against the collection schema
        // Beware that it will silently filter out any properties not defined in the schema
        const data = await parseData({
          id: m.path,
          data: frontmatter,
        });

        // Use the hacked version - I'd love to avoid this!
        const rendered = await renderMarkdown(markdown, {
          frontmatter: frontmatter,
          fileURL: m.path,
        });
        // const rendered = await renderMarkdown(markdown);

        store.set({
          id: m.path,
          data: data,
          body: markdown,
          rendered: rendered,
        });
      }
    },
  };
}
