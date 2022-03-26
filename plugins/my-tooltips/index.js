const visit = require("unist-util-visit")
const fs    = require("fs")

module.exports = ({ markdownAST }, pluginOptions) => {
  try {
    const data = fs.readFileSync(pluginOptions.file, 'utf8')
    const map = JSON.parse(data)

    visit(markdownAST, "inlineCode", (node, index, parent) => {
      // HTML in headings causes problems for the page index, so skip these
      if (parent.type !== "heading") {
        const text = node.value
        const value = map[text]
        if (value) {
          const html = `<code title="${text} = ${value}">${text}</code>`
          node.type = "html"
          node.children = undefined
          node.value = html
        }
      }
    })
 
  } catch (err) {
    console.error(err)
  }

  return markdownAST
}
