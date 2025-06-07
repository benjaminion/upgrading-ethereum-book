import fs from 'fs';

// Extract annotated spec into a single page document

// This matches the page divisions in the Markdown file
const reStart = /^# .*<!-- \/part3\/ -->$/dm;
const reEnd = /^# .*<!-- \/part4\/ -->$/dm;

const preamble =
  '# One Page Annotated Spec\n\n' +
  '**Note:** This page is automatically generated from the chapters ' +
  'in [Part 3](/part3/). You may find that some internal links are broken.';

// Note that this relies on modifying the astro package to add an `opts` argument
// to `.render` (see ../patches) in order to get the frontmatter correctly propagated.

export function specLoader(fileName) {
  return {
    name: 'spec-loader',
    load: async ({ store, parseData, renderMarkdown, logger }) => {
      logger.info('Reading spec from ' + fileName);

      let allMarkdown = '';
      try {
        allMarkdown = await fs.readFileSync(fileName, 'utf8');
      } catch (error) {
        console.error('Failed to read input file ' + fileName);
        throw error;
      }

      store.clear();

      const startMatch = reStart.exec(allMarkdown);
      const endMatch = reEnd.exec(allMarkdown);

      let markdown = preamble;
      if (startMatch && endMatch) {
        // Remove the title - we will replace it
        const start = startMatch.indices[0][1] + 1;
        const end = endMatch.indices[0][0];
        // Extract the spec, add the preamble, and rewrite internal links
        markdown += allMarkdown
          .substring(start, end)
          .replace(/]\(\/part3\/[^#)]*/g, '](');
      } else {
        logger.warn('Creating empty annotated spec');
      }

      const path = '/annotated-spec/';
      const frontmatter = {
        path: path,
        titles: ['One Page Annotated Spec'],
        index: [999],
        sequence: 990,
        search: false,
      };

      // Validate the frontmatter data against the collection schema
      // Beware that it will silently filter out any properties not defined in the schema
      const data = await parseData({
        id: path,
        data: frontmatter,
      });

      // Use the hacked version - I'd love to avoid this!
      const rendered = await renderMarkdown(markdown, {
        frontmatter: frontmatter,
        fileURL: path,
      });
      // const rendered = await renderMarkdown(markdown);

      store.set({
        id: path,
        data: data,
        body: markdown,
        rendered: rendered,
      });
    },
  };
}
