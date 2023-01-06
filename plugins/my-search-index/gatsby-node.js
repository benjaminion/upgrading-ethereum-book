const cheerio = require('cheerio')

/*
 * Creates a GraphQL node containing data for the local search
 */

// Concatenate all text in child nodes while respecting exclusions
const getText = ($, node, exclude) => {

  let text = ''

  if ($(node).is(exclude.ignore)) {
    return text
  }

  if (node.type === 'text') {
    text += node.data
  }

  $(node).contents().each(function (i, e) {
    text += getText($, e, exclude)
  })

  return text
}

// Recurse until we find an element we want to treat as a chunk, then get all its text content.
const getChunks = ($, node, chunkTypes, exclude) => {

  const chunks = []

  if ($(node).is(exclude.ignore) || $(node).is(exclude.dedup)) {
    return chunks
  }

  chunkTypes.every( (type) => {
    if ($(node).is(type.query)) {
      const text = getText($, node, exclude)
      if (text !== '') {
        chunks.push(
          {
            type: $(node).get(0).tagName,
            label: type.label,
            id: $(node).attr('id'),
            text: text,
          })
      }
      // Add a node only once
      return false
    }
    return true
  })

  $(node).children().each(function (i, e) {
    chunks.push(getChunks($, e, chunkTypes, exclude))
  })

  return chunks.flat()
}

exports.createPages = async (
  {
    actions,
    graphql,
    reporter,
    createNodeId,
    createContentDigest,
  }, pluginOptions,
) => {

  const {
    enabled = true,
    root = '',
    chunkTypes = [],
    pageFilter = '{}',
    exclude = {pages: [], ignore: '', dedup: ''},
  } = pluginOptions

  const mySearchData = []

  if (enabled) {

    const result = await graphql(`
      {
        allMarkdownRemark(filter: ${pageFilter}) {
          edges {
            node {
              html
              frontmatter {
                path
                titles
              }
            }
          }
        }
      }
    `)

    const pages = result.data.allMarkdownRemark.edges

    await Promise.all(pages.map(async (page) => {

      const frontmatter = page.node.frontmatter
      if (frontmatter !== undefined && exclude.pages.indexOf(frontmatter.path) === -1) {

        // Get the HTML. This is the contents of `dangerouslySetInnerHTML={{ __html: html }}`
        // in the page template.
        const $ = cheerio.load(page.node.html, null, false)

        // Changes to the HTML AST made here will not persist, but we need to do
        // exactly the same as in gatsby-ssr so that our ids end up consistent.
        chunkTypes.forEach( (type) => {
          $(type.query).not(exclude.ignore).not(exclude.dedup).not('[id]').each( function (i, e) {
            $(this).attr('id', $(this).get(0).tagName + '_' + i)
          })
        })

        const chunks = getChunks($, $.root(), chunkTypes, exclude)

        mySearchData.push({
          path: frontmatter.path,
          title: frontmatter.titles.filter(x => x !== '').join(' | '),
          chunks: chunks,
        })
      }
    }))
  }

  name = 'mySearchData'
  actions.createNode({
    id: createNodeId(name),
    data: mySearchData,
    internal: {
      type: name,
      contentDigest: createContentDigest(mySearchData)
    }
  })
}

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type mySearchData implements Node {
      data: JSON
    }
  `)
}
