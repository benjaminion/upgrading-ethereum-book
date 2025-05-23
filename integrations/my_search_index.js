import * as cheerio from 'cheerio';
import { unified } from 'unified';
import {rehype} from 'rehype'
import parse from 'rehype-parse';
import { toHtml } from 'hast-util-to-html';
import fs from 'fs';

// File scoped to accumulate the index across calls to mySearchIndex
const searchIndex = [];

function isExcludedFrontmatter (frontmatter, exclude) {
  for (let i = 0; i < exclude.frontmatter.length; i++) {
    const test = exclude.frontmatter[i];
    const [key, ...rest] = Object.keys(test);
    if (Object.prototype.hasOwnProperty.call(frontmatter, key)
        && frontmatter[key] == test[key]) {
      return true;
    }
  }
  return false;
}

// Concatenate all text in child nodes while respecting exclusions
function getText ($, node, exclude) {
  return [...$(node).contents().not(exclude.ignore)]
    .map(e => (e.type === 'text') ? e.data : getText($, e, exclude))
    .join('');
}

// Recurse until we find an element we want to treat as a chunk, then get all its text content.
function getChunks ($, node, chunkTypes, exclude, counts) {

  if (counts === undefined) {
    counts = Array(chunkTypes.length).fill(0);
  }

  for (let idx = 0; idx < chunkTypes.length; idx++) {

    const type = chunkTypes[idx];

    if ($(node).is(type.query)) {

      const text = getText($, node, exclude);
      if (text !== '') {

        const tagName = $(node).prop('tagName').toLowerCase()
        let id = $(node).attr('id');
        if ( id === undefined) {
          id = tagName + '_' + counts[idx];
          $(node).attr('id', id);
          ++counts[idx];
        }

        return [{
          type: tagName,
          label: type.label,
          id: id,
          text: text,
          weight: type.weight === undefined ? 1 : type.weight,
        }];
      }
    }
  }

  return [...$(node).children().not(exclude.ignore)]
    .map(e => getChunks($, e, chunkTypes, exclude, counts))
    .flat();
}

function includePage(frontmatter, exclude) {
  return (frontmatter !== undefined
          && isExcludedFrontmatter(frontmatter, exclude) === false
          && exclude.pages?.indexOf(frontmatter.path) === -1);
}

function buildSearchIndex(options) {

  const { chunkTypes, exclude } = { ...options };

  return function (tree, file) {

    const frontmatter = file.data.astro.frontmatter;

    if (includePage(frontmatter, exclude)) {
      // console.log('Processing ' + frontmatter.path);

      // We convert between HAST and Cheerio by going via a HTML string.
      // TODO: avoid cheerio and just use unist-visit and related tools.
      const $ = cheerio.load(toHtml(tree, {allowDangerousHtml: true}), null, false);
      const chunks = getChunks($, $.root(), chunkTypes, exclude)

      const pageIndexData = {
        frontmatter: {
          path: frontmatter.path,
          titles: frontmatter.titles,
        },
        chunks: chunks,
      }

      searchIndex.push(pageIndexData);

      return unified().use(parse, {fragment: true}).parse($.html());

    } else {
      // console.log('Ignoring ' + frontmatter.path);
    }
  }
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

export default function(options) {

  if (options.enabled === false) {
    return {name: 'my-search-index'};
  }

  return {
    name: 'mySearchIndex',
    hooks: {
      // We build the search index with rehype
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          markdown: {
            rehypePlugins: [
              [buildSearchIndex, options],
            ],
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
