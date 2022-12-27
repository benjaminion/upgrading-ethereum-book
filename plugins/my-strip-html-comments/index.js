const visit = require('unist-util-visit')

// Remove HTML comments from the Markdown AST

module.exports = ({ markdownAST, context }) => {

  try {
    visit(markdownAST, 'html', (node, index, parent) => {
      if (node.value.startsWith('<!-- ')) {
        parent.children.splice(index, 1)
        return [visit.SKIP, index]
      }
    })
  } catch (err) {
    console.error(err)
  }

  return markdownAST
}
