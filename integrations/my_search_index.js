import { visit, SKIP, CONTINUE } from 'unist-util-visit';
import { matches } from 'hast-util-select';
import fs from 'fs';

// File scoped to accumulate the index across calls to mySearchIndex
const searchIndex = [];

function isExcludedFrontmatter(frontmatter, exclude) {
  for (let i = 0; i < exclude.frontmatter.length; i++) {
    const test = exclude.frontmatter[i];
    const key = test.key;
    if (
      Object.prototype.hasOwnProperty.call(frontmatter, key) &&
      frontmatter[key] == test.value
    ) {
      return true;
    }
  }
  return false;
}

// Recursively concatenate all text in child nodes while respecting exclusions
function getText(node, exclude) {
  if (node.type === 'text') {
    // [\u202F\u00A0] is a non-breaking space
    return node.value.replace(/[\u202F\u00A0]/, ' ');
  }

  if (node.type !== 'element' || matches(exclude.ignore, node)) {
    return '';
  }

  return node.children
    .map((node) => {
      return getText(node, exclude);
    })
    .join('');
}

function getChunks(tree, chunkTypes, exclude) {
  const counts = Array(chunkTypes.length).fill(0);
  let chunks = [];

  // Walk the tree until we find an element we want to treat as a chunk, then get
  // all its text content.
  visit(tree, 'element', (node) => {
    if (matches(exclude.ignore, node)) {
      return SKIP;
    }

    for (let idx = 0; idx < chunkTypes.length; idx++) {
      const type = chunkTypes[idx];
      if (matches(type.query, node)) {
        const text = getText(node, exclude);
        if (text !== '') {
          const tagName = node.tagName.toLowerCase();
          let id = node.properties?.id;
          if (id === undefined) {
            // Edit the element's ID so we can find it from the search page later
            id = tagName + '_' + counts[idx];
            node.properties.id = id;
            ++counts[idx];
          }

          chunks.push({
            type: tagName,
            label: type.label,
            id: id,
            text: text,
            weight: type.weight === undefined ? 1 : type.weight,
          });
        }
        return SKIP;
      }
    }

    return CONTINUE;
  });

  return chunks;
}

function includePage(frontmatter, exclude) {
  return (
    frontmatter !== undefined &&
    isExcludedFrontmatter(frontmatter, exclude) === false &&
    exclude.pages?.indexOf(frontmatter.path) === -1
  );
}

function buildSearchIndex(options) {
  const { chunkTypes, exclude, logger } = { ...options };

  return function (tree, file) {
    const frontmatter = file.data.astro.frontmatter;

    if (includePage(frontmatter, exclude)) {
      logger.debug('Processing ' + frontmatter.path);

      const chunks = getChunks(tree, chunkTypes, exclude);
      const pageIndexData = {
        frontmatter: {
          path: frontmatter.path,
          titles: frontmatter.titles,
        },
        chunks: chunks,
      };
      searchIndex.push(pageIndexData);
    } else {
      logger.debug('Ignoring ' + frontmatter.path);
    }
  };
}

function writeSearchIndex(dir, file, logger) {
  const fileName = dir.pathname + file;

  if (searchIndex.length) {
    logger.info('Indexed ' + searchIndex.length + ' pages');
  } else {
    logger.warn('No pages were indexed');
  }

  fs.writeFileSync(fileName, JSON.stringify(searchIndex));
  logger.info('Wrote search index to ' + fileName);
}

export default function (options) {
  if (options.enabled === false) {
    return { name: 'my-search-index' };
  }

  return {
    name: 'mySearchIndex',
    hooks: {
      // We build the search index with rehype
      'astro:config:setup': ({ updateConfig, logger }) => {
        updateConfig({
          markdown: {
            rehypePlugins: [[buildSearchIndex, { ...options, logger: logger }]],
          },
        });
      },
      // We write the search index to a file once the build is complete
      'astro:build:done': ({ dir, logger }) => {
        writeSearchIndex(dir, options.indexFile, logger);
      },
    },
  };
}
