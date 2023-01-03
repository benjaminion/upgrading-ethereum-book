const parse5 = require('parse5')
const { isExcluded, getId, addIdToTags } = require('./util.js')

// Creates a GraphQL node containing data for the local search

// Concatenate all text in child nodes.
const getText = (node, exclude) => {

  let text = ''

  if (isExcluded(node, exclude)) {
    return text
  }

  if (node.nodeName === '#text') {
    text += node.value
  }

  for (let i = 0; i < node.childNodes?.length; i++) {
    text += getText(node.childNodes[i], exclude)
  }

  return text
}

// Recurse until we find an element we want to treat as a chunk, then get all its text content.
const getChunks = (node, chunkTypes, exclude) => {

  const chunks = []

  if (isExcluded(node, exclude)) {
    return chunks
  }

  if (Object.keys(chunkTypes).indexOf(node.nodeName) !== -1) {
    const text = getText(node, exclude)
    if (text !== '') {
      chunks.push(
        {
          type: node.nodeName,
          label: chunkTypes[node.nodeName],
          id: getId(node), // We previously added an id, so it should be there.
          text: text,
        }
      )
    }
  }

  for (let i = 0; i < node.childNodes?.length; i++) {
    chunks.push(getChunks(node.childNodes[i], chunkTypes, exclude))
  }

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
    chunkTypes = {},
    pageFilter = '{}',
    exclude = {pages: [], tags: [], attributes: []},
  } = pluginOptions

  const mySearchData = []

  if (enabled) {

    const result = await graphql(`
      {
        allMarkdownRemark(filter: ${pageFilter}) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `)

    const pages = result.data.allMarkdownRemark.edges

    await Promise.all(pages.map(async (page) => {

      const path = page.node.frontmatter.path
      if (exclude.pages.indexOf(path) == -1) {

        // Get the raw HTML. We could get the htmlAst directly from the node,
        // but the parse5 format is easier to deal with.
        const htmlData = await graphql(`
        {
          markdownRemark(frontmatter: {path: {eq: "${path}"}}) {
            html
            frontmatter {
              titles
            }
          }
        }
      `)

        const htmlAst = parse5.parse(htmlData.data.markdownRemark.html)
        const frontmatter = htmlData.data.markdownRemark.frontmatter

        // Changes to the HTML AST made here will not persist, but we need to do
        // exactly the same as in gatsby-ssr so that our ids end up consistent.
        Object.keys(chunkTypes).forEach(tag => {
          addIdToTags(htmlAst, tag, exclude)
        })

        const chunks = getChunks(htmlAst, chunkTypes, exclude)

        mySearchData.push({
          path: path,
          title: frontmatter.titles.filter(x => x !== "").join(" | "),
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
