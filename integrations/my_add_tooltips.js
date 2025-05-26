import { visit } from 'unist-util-visit';
import fs from 'fs';

// Add a tooltip to constant values in the text according to the mapping in the
// supplied file.

let constantsMap = {};

function addTooltips() {
  return function (tree) {
    visit(tree, 'inlineCode', (node, index, parent) => {
      // HTML in headings causes problems for the page index, so skip these
      if (parent.type !== 'heading') {
        const text = node.value;
        const value = constantsMap[text];
        if (value) {
          node.type = 'html';
          node.value = `<code title="${text} = ${value}">${text}</code>`;
          node.children = undefined;
        }
      }
    });
  };
}

export default function (options) {
  // Read the constants file and store it for later
  const constantsFile = options?.constantsFile || '';
  constantsMap = JSON.parse(fs.readFileSync(constantsFile, 'utf8'));

  return {
    name: 'myAddTooltips',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          markdown: {
            remarkPlugins: [addTooltips],
          },
        });
      },
    },
  };
}
