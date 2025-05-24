import { visit } from 'unist-util-visit';

// Add a tooltip to constant values in the text according to the mapping in the
// supplied file.

let constantsMap = {};

function addTooltips() {
  return function (tree) {
    try {
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
    } catch (err) {
      console.error(err);
    }
  };
}

export default function (options) {
  // Read the constants file and store it for later
  const constantsFile = options?.constantsFile || '';
  try {
    constantsMap = JSON.parse(fs.readFileSync(constantsFile, 'utf8'));
  } catch (err) {
    console.log(err);
  }

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
