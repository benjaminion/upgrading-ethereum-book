import { visit } from 'unist-util-visit';

// Prepend `base` to URLs in the markdown file.
// It seems that [Astro does not do this](https://github.com/withastro/astro/issues/3626)

function fixupLinks(basePath) {
  return function (tree) {
    try {
      visit(tree, 'element', (node) => {
        if (node.tagName == 'a' && node.properties.href) {
          // Add basePath prefix to local URLs that lack it
          // [Astro does not do this](https://github.com/withastro/astro/issues/3626)
          if (
            node.properties.href.startsWith('/') &&
            !node.properties.href.startsWith(basePath + '/')
          ) {
            node.properties.href = basePath + node.properties.href;
          }

          // Add rel="external noopener" and target="_blank" attributes to off-site links
          if (
            !node.properties.href.startsWith('/') &&
            !node.properties.href.startsWith('#')
          ) {
            node.properties.rel = ['external', 'noopener'];
            node.properties.target = '_blank';
          }
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export default function () {
  return {
    name: 'myFixupLinks',
    hooks: {
      'astro:config:setup': ({ config, updateConfig }) => {
        updateConfig({
          markdown: {
            rehypePlugins: [[fixupLinks, config.base]],
          },
        });
      },
    },
  };
}
