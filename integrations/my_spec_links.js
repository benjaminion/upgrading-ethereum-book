import { visit, CONTINUE, SKIP } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';

// Fix up internal links in the one-page annotated spec.
// Must be configured to run after myAutoLinkHeadings, and before myFixupLinks and myCleanupHtml.
// The one-page spec is excluded from search index processing, so no need to worry about that.

// Ignore SVGs and anything to do with footnotes (which should be fine without help)
function isIgnoredElement(node) {
  return (
    node.tagName === 'svg' ||
    (node.tagName === 'a' && node.properties.dataFootnoteRef !== undefined) ||
    (node.tagName === 'section' && node.properties.dataFootnotes !== undefined)
  );
}

// Only headings and <a id="..."> are of interest
function isTargetElement(node) {
  return (
    node.properties?.id !== undefined &&
    ['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)
  );
}

// We look at all links, but '/part3/' should point to the main book, not the one-page spec
function isLinkElement(node) {
  return (
    node.tagName === 'a' &&
    node.properties?.href !== undefined &&
    node.properties.href !== '/part3/'
  );
}

// New pages are indicated by comments attached to certain headings in the Markdown
function isNewPage(node) {
  return (
    ['h1', 'h2', 'h3'].includes(node.tagName) &&
    node.children[node.children.length - 1].type === 'comment'
  );
}

function specLinks({ logger }) {
  return function (tree, file) {
    if (file.data.astro.frontmatter.path !== '/annotated-spec/') return;

    // We re-slug the slug to handle duplicates
    const slugger = new GithubSlugger();

    // Pass 1: Build a map of pages and ids/slugs
    const map = {};
    let page = '';
    visit(tree, 'element', (node) => {
      if (isIgnoredElement(node)) return SKIP;

      if (isTargetElement(node)) {
        const oldSlug = node.properties.id;
        const newSlug = slugger.slug(oldSlug);
        node.properties.id = newSlug;
        if (isNewPage(node)) {
          page = node.children[node.children.length - 1].value.trim();
          map[page] = newSlug;
        }
        page || logger.warn('Page is not set when processing ' + oldSlug);
        map[page + '#' + oldSlug] = newSlug;
      }
    });

    // Pass 2: Adjust hrefs - we need two passes in case any references are forward-looking
    page = '';
    visit(tree, 'element', (node) => {
      if (isIgnoredElement(node)) return SKIP;

      if (isNewPage(node)) {
        page = node.children[node.children.length - 1].value.trim();
        return CONTINUE;
      }

      if (isLinkElement(node)) {
        const oldHref = node.properties.href;
        let newHref;
        if (oldHref.startsWith('#')) {
          newHref = map[page + oldHref];
        } else if (oldHref.startsWith('/part3/')) {
          newHref = map[oldHref];
        } else {
          return CONTINUE;
        }
        newHref || logger.warn('Failed to fix spec link: ' + oldHref);
        node.properties.href = '#' + newHref;
      }
    });
  };
}

export default function () {
  return {
    name: 'mySpecLinks',
    hooks: {
      'astro:config:setup': ({ updateConfig, logger }) => {
        updateConfig({
          markdown: {
            rehypePlugins: [[specLinks, { logger: logger }]],
          },
        });
      },
    },
  };
}
