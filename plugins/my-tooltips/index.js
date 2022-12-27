const visit = require("unist-util-visit")
const fs    = require("fs")

module.exports = ({ markdownAST, context }, pluginOptions) => {

  // This is a hack to avoid doing the same work twice.
  // gatsby-transformer-remark/extend-node-type ends up calling all plugins
  // twice via parseString(): once due to getHeadings() and once due to getHTMLAst().
  // The context distinguishes these.
  if (context['path'].startsWith('/')) {
    try {
      const data = fs.readFileSync(pluginOptions.file, 'utf8')
      const map = JSON.parse(data)

      visit(markdownAST, "inlineCode", (node, index, parent) => {
        // HTML in headings causes problems for the page index, so skip these
        if (parent.type !== "heading") {
          const text = node.value
          const value = map[text]
          if (value) {
            node.type = "html"
            node.value = `<code title="${text} = ${value}">${text}</code>`
            node.children = undefined
          }
        }
      })

    } catch (err) {
      console.error(err)
    }
  }

  return markdownAST
}
