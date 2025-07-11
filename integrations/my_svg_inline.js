import { visit } from 'unist-util-visit';
import { optimize } from 'svgo';
import { getHashDigest } from 'loader-utils';
import path from 'path';
import fs from 'fs';

// Inline SVG files into the Markdown AST

// SVGO doesn't really support adding elements, and the API changes.
// The below is based on code from the "reusePaths" plugin.
const addTitle = {
  name: 'addTitle',
  type: 'visitor',
  active: true,
  fn: (ast, params) => {
    return {
      element: {
        exit: (node, parentNode) => {
          if (node.name === 'svg' && parentNode.type === 'root') {
            const hasTitle = node.children.some(
              (child) => child.type === 'element' && child.name === 'title',
            );
            if (!hasTitle) {
              const titleElement = {
                type: 'element',
                name: 'title',
                attributes: {},
                children: [],
              };
              Object.defineProperty(titleElement, 'parentNode', {
                writable: true,
                value: node,
              });
              const titleContents = {
                type: 'text',
                value: params.titleText,
              };
              Object.defineProperty(titleContents, 'parentNode', {
                writable: true,
                value: titleElement,
              });
              titleElement.children.push(titleContents);
              node.children.unshift(titleElement);
            }
          }
        },
      },
    };
  },
};

// See https://www.npmjs.com/package/svgo
const plugins = [
  'preset-default',
  'prefixIds',
  'removeDimensions',
  'removeXMLNS',
  {
    name: 'addAttributesToSVGElement',
    params: { attribute: { role: 'img' } },
  },
  'removeRasterImages',
];

const addTitleSettings = {
  name: addTitle.name,
  type: addTitle.type,
  active: addTitle.active,
  fn: addTitle.fn,
  params: undefined,
};

const addAttributes = {
  name: 'addAttributesToSVGElement',
  params: undefined,
};

function inlineSvg(options) {
  const filePath = options.filePath || '';
  const cachePathTmp = options.cachePath;
  const cachePath = cachePathTmp.endsWith('/')
    ? cachePathTmp
    : cachePathTmp + '/';
  const { logger, doCache } = options;

  return function (tree) {
    visit(tree, 'paragraph', (node) => {
      if (node.children[0].type == 'image') {
        const image = node.children[0];

        if (image.url.endsWith('.svg')) {
          const originalSvg = fs.readFileSync(filePath + image.url, 'utf8');
          const basename = path.basename(image.url, '.svg');

          // We need to distinguish multiple SVGs on the same page by using "prefixIds"
          const digest = getHashDigest(basename, 'md5', 'base52', 4);

          // Configure the SVGO addAttributes plugin to add an ID to SVG element
          addAttributes['params'] = { attribute: { id: basename + '-svg' } };

          // Configure our custom plugin that adds a title element
          addTitleSettings['params'] = { titleText: image.alt };

          // If the cachePath option is provided, we load the optimised SVG from there
          // when it exists and is newer than the original SVG. If a cached version is
          // is not available or is older than the original SVG, we rewrite it.

          const origMtime = fs.statSync(filePath + image.url).mtime;
          const cacheFile = doCache ? cachePath + basename + '.svg' : null;
          const goodCache =
            doCache &&
            fs.existsSync(cacheFile) &&
            fs.statSync(cacheFile).mtime > origMtime;

          let svg;
          if (goodCache) {
            svg = fs.readFileSync(cacheFile, 'utf8');
            logger.debug(`Using cached ${basename}.svg`);
          } else {
            svg = optimize(originalSvg, {
              path: digest,
              plugins: plugins.concat([addTitleSettings, addAttributes]),
            }).data;
            logger.debug(`Optimising ${basename}.svg`);
            if (doCache) {
              fs.writeFileSync(cacheFile, svg);
              logger.debug(`Caching ${basename}.svg`);
            } else {
              logger.debug(`Not caching ${basename}.svg`);
            }
          }

          // Modify the current node in-place
          node.type = 'html';
          node.value = svg;
          node.children = [];
        }
      }
    });
  };
}

export default function (options) {
  return {
    name: 'mySvgInline',
    hooks: {
      'astro:config:setup': ({ updateConfig, logger }) => {
        let doCache = false;
        if (options.cachePath) {
          try {
            if (fs.statSync(options.cachePath).isDirectory()) {
              doCache = true;
            } else {
              logger.warn(
                `Not caching SVGs: ${options.cachePath} is not a directory`,
              );
            }
          } catch (e) {
            logger.warn(
              `Not caching SVGs: ${options.cachePath} does not exist`,
            );
          }
        } else {
          logger.info('Not caching SVGs: no cachePath provided');
        }
        updateConfig({
          markdown: {
            remarkPlugins: [
              [inlineSvg, { ...options, logger: logger, doCache: doCache }],
            ],
          },
        });
      },
    },
  };
}
