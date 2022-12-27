const visit = require('unist-util-visit')

// Remove HTML comments from the Markdown AST

module.exports = ({ markdownAST, context }) => {

  // This is a hack to avoid doing the same work twice.
  // gatsby-transformer-remark/extend-node-type ends up calling all plugins
  // twice via parseString(): once due to getHeadings() and once due to getHTMLAst().
  // The context distinguishes these.
  if (context['path'].startsWith('/')) {
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
  }

  return markdownAST
}
