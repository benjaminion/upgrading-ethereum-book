const { renderToString } = require('react-dom/server')
const parse5 = require('parse5')
const { addIdToTags } = require('./util.js')

// Adds ID anchors to all elements that might appear in the local search

const findBody = (node) => {

  if (node.tagName === 'body') {
    return node
  }

  for (let i = 0; i < node.childNodes?.length; i++) {
    let maybeBody = findBody(node.childNodes[i])
    if(maybeBody != null) {
      return maybeBody
    }
  }

  return null
}

exports.replaceRenderer = ({ pathname, bodyComponent, replaceBodyHTMLString }, pluginOptions) => {

  const {
    enabled = true,
    chunkTypes = {},
    exclude = {pages: [], tags: [], attributes: []},
  } = pluginOptions

  if (enabled && exclude.pages.indexOf(pathname) == -1) {

    // Get the HTML
    const bodyHTML = renderToString(bodyComponent)
    const body = findBody(parse5.parse(bodyHTML))

    // Change the HTML
    Object.keys(chunkTypes).forEach(tag => {
      addIdToTags(body, tag, exclude)
    })

    // Replace the HTML
    replaceBodyHTMLString(parse5.serialize(body))
  }
}
