const { renderToString } = require('react-dom/server')
const cheerio = require('cheerio')

/*
 * Adds ID anchors to all elements that might appear in the local search
 */

exports.replaceRenderer = ({ pathname, bodyComponent, replaceBodyHTMLString }, pluginOptions) => {

  const {
    enabled = true,
    root = 'body',
    chunkTypes = [],
    exclude = {pages: [], ignore: '', dedup: ''},
  } = pluginOptions

  if (enabled && exclude.pages.indexOf(pathname) == -1) {

    // Get the HTML
    const html = renderToString(bodyComponent)
    const $ = cheerio.load(html, null, false)

    // Modify the HTML - add id attributes where required.
    chunkTypes.forEach( (type) => {
      $(root + ' *').filter(type.query).not(exclude.ignore).not(exclude.dedup).not('[id]').each( function (i, e) {
        $(this).attr('id', $(this).get(0).tagName + '_' + i)
      })
    })

    // Replace the HTML
    replaceBodyHTMLString($.html())
  }
}
