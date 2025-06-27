import { visit, SKIP } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';

// Fix up internal links in the one-page annotated spec.
// Must be configured to run after myAutoLinkHeadings, and before myFixupLinks and myCleanupHtml.
// The one-page spec is excluded from search index processing, so no need to worry about that.

// Ignore SVGs and anything to do with footnotes (which should be fine without help)
const isIgnoredElement = (node) => {
  return (
    node.tagName === 'svg' ||
    (node.tagName === 'a' && node.properties.dataFootnoteRef !== undefined) ||
    (node.tagName === 'section' && node.properties.dataFootnotes !== undefined)
  );
};

// Only headings and <a id="..."> are of interest
const isTargetElement = (node) => {
  return (
    node.properties?.id !== undefined &&
    ['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)
  );
};

// We process all internal links, but '/part3/' should point to the main book
const isInternalLink = (node) => {
  return (
    node.tagName === 'a' &&
    node.properties?.href !== undefined &&
    (node.properties.href.startsWith('/part3/') ||
      node.properties.href.startsWith('#')) &&
    node.properties.href !== '/part3/'
  );
};

// New pages are indicated by comments attached to certain headings in the Markdown
const isNewPage = (node) => {
  return (
    ['h1', 'h2', 'h3'].includes(node.tagName) &&
    node.children[node.children.length - 1].type === 'comment'
  );
};

function specLinks({ logger }) {
  return function (tree, file) {
    if (file.data.astro.frontmatter.path !== '/annotated-spec/') return;

    // Re-slug the slug to handle duplicates
    const slugger = new GithubSlugger();

    const map = {};
    const links = [];
    let page = '';
    visit(tree, 'element', (node) => {
      if (isIgnoredElement(node)) return SKIP;

      if (isTargetElement(node)) {
        const oldSlug = node.properties.id;
        const newSlug = slugger.slug(oldSlug);
        if (newSlug !== oldSlug) {
          node.properties.id = newSlug;
          logger.debug(`Rewrote slug #${oldSlug} to #${newSlug}`);
        }
        if (isNewPage(node)) {
          page = node.children[node.children.length - 1].value.trim();
          if (page.endsWith('*')) {
            page = page.slice(0, -1);
          }
          map[page] = newSlug;
        }
        if (page) {
          map[page + '#' + oldSlug] = newSlug;
        } else {
          logger.warn(`Page is not set when processing ${oldSlug}`);
        }
      }

      if (isInternalLink(node)) {
        links.push({ node, page });
      }
    });

    logger.debug(`Rewriting ${links.length} internal links in total`);

    links.forEach(({ node, page }) => {
      const oldHref = node.properties.href;
      const newHref = oldHref.startsWith('#')
        ? map[page + oldHref]
        : map[oldHref];
      if (newHref) {
        node.properties.href = '#' + newHref;
        if (!oldHref.endsWith(newHref)) {
          logger.debug(`Rewrote href ${oldHref} to #${newHref}`);
        }
      } else {
        logger.warn(`Failed to fix spec link ${oldHref}`);
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
            rehypePlugins: [[specLinks, { logger }]],
          },
        });
      },
    },
  };
}
