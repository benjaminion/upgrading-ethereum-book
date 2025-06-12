import fs from 'fs';

// Extract annotated spec into a single page document.

const reStart = /^# .*<!-- \/part3\/ -->$/dm;
const reEnd = /^# .*<!-- \/part4\/ -->$/dm;

const preamble =
  '# One Page Annotated Spec\n\n' +
  '**Note:** This page is automatically generated from the chapters ' +
  'in [Part 3](/part3/). You may find that some internal links are broken.';

export function specLoader(fileName) {
  return {
    name: 'spec-loader',
    load: async ({
      collection,
      store,
      parseData,
      generateDigest,
      config,
      logger,
      entryTypes,
    }) => {
      logger.info(`Reading ${collection} from ${fileName}`);

      let allMarkdown = '';
      try {
        allMarkdown = fs.readFileSync(fileName, 'utf8');
      } catch (error) {
        console.error('Failed to read input file ' + fileName);
        throw error;
      }

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

      const digest = generateDigest(markdown);
      if (store.get(path)?.digest === digest) {
        logger.debug(`Not reloading ${path}`);
        return;
      }
      logger.debug(`Reloading ${path}`);

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

      const render = await entryTypes.get('.md').getRenderFunction(config);
      const rendered = await render({
        id: path,
        data: frontmatter,
        body: markdown,
        filePath: path,
        digest: digest,
      });

      store.set({
        id: path,
        data: data,
        body: markdown,
        digest: digest,
        rendered: rendered,
      });
    },
  };
}
