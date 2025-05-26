import { visit, SKIP } from 'unist-util-visit';

// Clean up any weird HTML artefacts, especially those that fail validation

function cleanupHtml() {
  return function (tree) {
    // Remove `is:raw=""` that's on `code` elements, probably from Prism.
    visit(tree, 'element', (node) => {
      if (node.tagName == 'code') {
        delete node.properties['is:raw'];
      }
    });

    // Remove any comments
    visit(tree, 'comment', (node, index, parent) => {
      parent.children.splice(index, 1);
      return SKIP;
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
