const { renderToString } = require('react-dom/server')
const parse5 = require('parse5')
const { addIdToTags, findBody } = require('./util.js')

// Adds ID anchors to all elements that might appear in the local search

exports.replaceRenderer = ({ pathname, bodyComponent, replaceBodyHTMLString }, pluginOptions) => {

  const {
    enabled = true,
    chunkTypes = [],
    exclude = {pages: [], tags: [], attributes: []},
  } = pluginOptions

  if (enabled && exclude.pages.indexOf(pathname) == -1) {

    // Get the HTML
    const html = renderToString(bodyComponent)
    const body = findBody(parse5.parse(html))

    // Change the HTML. We walk the tree multiple times so that the IDs are nicely
    // consecutively numbered for each type.
    chunkTypes.forEach(type => {
      if (type.tagMatch !== undefined && type.idMatch === undefined) {
        addIdToTags(body, type.tagMatch, exclude)
      }
    })

    // Replace the HTML
    replaceBodyHTMLString(parse5.serialize(body))
  }
}
