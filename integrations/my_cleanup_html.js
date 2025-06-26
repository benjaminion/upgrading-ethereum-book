import { visit, CONTINUE, SKIP } from 'unist-util-visit';

// Clean up any weird HTML artefacts, especially those that fail validation

function cleanupHtml() {
  return function (tree) {
    visit(tree, undefined, (node, index, parent) => {
      // Remove `is:raw=""` that's on `code` elements, probably from Prism
      if (node.type === 'element' && node.tagName === 'code') {
        delete node.properties['is:raw'];
        return CONTINUE;
      }

      // Remove whitespace at the end of headings. This can be left behind by section markers.
      if (
        node.type === 'text' &&
        parent.type === 'element' &&
        ['h1', 'h2', 'h3'].includes(parent.tagName)
      ) {
        node.value = node.value.trim();
        return CONTINUE;
      }

      // Huge numbers of newlines weirdly get inserted before tables - no idea why
      if (node.type === 'text' && node.value.match(/^\n\n+$/) !== null) {
        node.value = '\n';
        return CONTINUE;
      }

      // Remove all comments
      if (node.type === 'comment') {
        parent.children.splice(index, 1);
        return SKIP;
      }
    });
  };
}

export default function () {
  return {
    name: 'myCleanupHtml',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          markdown: {
            rehypePlugins: [cleanupHtml],
          },
        });
      },
    },
  };
}
