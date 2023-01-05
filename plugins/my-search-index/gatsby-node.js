const parse5 = require('parse5')
const { isExcluded, getId, addIdToTags, findBody } = require('./util.js')

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

const matchChunk = (node, chunkTypes) => {

  for (let i = 0; i < chunkTypes.length; i++) {

    const tagMatch = chunkTypes[i].tagMatch
    const idMatch = chunkTypes[i].idMatch
    const tag = node.nodeName
    const id = getId(node)

    const tagMatches = (tagMatch === undefined || tag.search(tagMatch) !== -1)
    const idMatches = (idMatch === undefined
                       || (id !== undefined && id.search(idMatch) !== -1))

    if (tagMatches && idMatches) {
      return i;
    }
  }
}

// Recurse until we find an element we want to treat as a chunk, then get all its text content.
const getChunks = (node, chunkTypes, exclude) => {

  const chunks = []

  if (isExcluded(node, exclude)) {
    return chunks
  }

  const matchIndex = matchChunk(node, chunkTypes)
  if (matchIndex !== undefined) {
    const text = getText(node, exclude)
    if (text !== '') {
      chunks.push(
        {
          type: node.nodeName,
          label: chunkTypes[matchIndex].label,
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
    chunkTypes = [],
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

        // Get the raw HTML. We could get the htmlAst directly from the node,
        // but the parse5 format is easier to deal with.
        const body = findBody(parse5.parse(page.node.html))

        // Changes to the HTML AST made here will not persist, but we need to do
        // exactly the same as in gatsby-ssr so that our ids end up consistent.
        chunkTypes.forEach(type => {
          if (type.tagMatch !== undefined && type.idMatch === undefined) {
            addIdToTags(body, type.tagMatch, exclude)
          }
        })

        const chunks = getChunks(body, chunkTypes, exclude)

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
