const visit = require("unist-util-visit")
const fs    = require("fs")

module.exports = ({ markdownAST, context }, pluginOptions) => {

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

  return markdownAST
}
