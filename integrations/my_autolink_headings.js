import { CONTINUE, SKIP, visit } from 'unist-util-visit';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
import { toString } from 'hast-util-to-string';
import { isElement } from 'hast-util-is-element';
import { matches } from 'hast-util-select';

// Add IDs and SVG permalinks to headings
// (rehype-autolink-headings is good, but can't be configured to ignore some headings)

const anchorHtml =
  '<a class="anchor" ariaHidden="true"><svg aria-hidden="true" tabindex="-1" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>';

// Should match the method in bin/build/checks/links.pl
function slugIt(heading) {
  return toString(heading)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9_-]/g, '');
}

function autoLinkHeadings(options) {
  const { headings, exclude } = options;
  return function (tree) {
    visit(tree, 'element', (node) => {
      if (!isElement(node, headings) || (exclude && matches(exclude, node))) {
        return CONTINUE;
      }

      if (!node.properties.id) {
        node.properties.id = slugIt(node);
      }
      const id = node.properties.id;
      const anchor = fromHtmlIsomorphic(anchorHtml, { fragment: true })
        .children[0];
      anchor.properties = { ...anchor.properties, href: '#' + id };

      node.children.unshift(anchor);
      return SKIP;
    });
  };
}

// The headings to process
const defaultHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
// Headings that match this selector are ignored
const defaultExclude = undefined;

export default function (options) {
  const headings = options?.headings ?? defaultHeadings;
  const exclude = options?.exclude ?? defaultExclude;
  return {
    name: 'myAutoLinkHeadings',
    hooks: {
      'astro:config:setup': ({ updateConfig, logger }) => {
        logger.debug('Headings: ' + headings);
        logger.debug('Exclude: ' + exclude);
        updateConfig({
          markdown: {
            rehypePlugins: [
              [autoLinkHeadings, { headings: headings, exclude: exclude }],
            ],
          },
        });
      },
    },
  };
}
