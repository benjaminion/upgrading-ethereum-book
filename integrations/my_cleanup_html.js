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
