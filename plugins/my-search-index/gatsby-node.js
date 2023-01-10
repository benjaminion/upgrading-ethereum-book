const cheerio = require('cheerio')

/*
 * Creates GraphQL nodes containing data for the local search
 */

// Concatenate all text in child nodes while respecting exclusions
const getText = ($, node, exclude) => {

  let text = ''

  if (node.type === 'text') {
    text += node.data
  }

  $(node).contents().not(exclude.ignore).each(function (i, e) {
    text += getText($, e, exclude)
  })

  return text
}

// Recurse until we find an element we want to treat as a chunk, then get all its text content.
const getChunks = ($, node, chunkTypes, exclude, counts) => {

  if (counts === undefined) {
    counts = Array(chunkTypes.length).fill(0)
  }

  const chunks = []

  for (let idx = 0; idx < chunkTypes.length; idx++) {

    const type = chunkTypes[idx]
    if ($(node).is(type.query)) {

      const tagName = $(node).get(0).tagName
      let id = $(node).attr('id')
      if ( id === undefined) {
        id = tagName + '_' + counts[idx]
        $(node).attr('id', id)
        ++counts[idx]
      }

      const text = getText($, node, exclude)
      if (text !== '') {
        chunks.push(
          {
            type: tagName,
            label: type.label,
            id: id,
            text: text,
            weight: type.weight === undefined ? 1 : type.weight,
          })
      }
      break
    }
  }

  $(node).children().not(exclude.ignore).not(exclude.dedup).each(function (i, e) {
    chunks.push(...getChunks($, e, chunkTypes, exclude, counts))
  })

  return chunks
}

const isExcludedFrontmatter = (frontmatter, exclude) => {

  for (let i = 0; i < exclude.frontmatter.length; i++) {
    const test = exclude.frontmatter[i]
    const [key, ...rest] = Object.keys(test)
    if (Object.prototype.hasOwnProperty.call(frontmatter, key)
        && frontmatter[key] == test[key]) {
      return true
    }
  }
  return false
}

exports.createPages = async (
  {
    actions: { createNode },
    graphql,
    createNodeId,
    createContentDigest,
  }, pluginOptions,
) => {

  const {
    enabled = true,
    chunkTypes = [],
    exclude = {frontmatter: [], pages: [], ignore: '', dedup: ''},
  } = pluginOptions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              path
              index
              sequence
              titles
              hide
            }
          }
        }
      }
    }
  `)

  const pages = result.data.allMarkdownRemark.edges

  await Promise.all(pages.map(async (page) => {

    const $ = cheerio.load(page.node.html, null, false)

    const frontmatter = page.node.frontmatter
    let chunks = []

    if (enabled
        && frontmatter !== undefined
        && isExcludedFrontmatter(frontmatter, exclude) === false
        && exclude.pages.indexOf(frontmatter.path) === -1) {

      chunks = getChunks($, $.root(), chunkTypes, exclude)
    }

    // It seems to be hard to modify the underlying MarkdownRemark node's HTML, so we add
    // the modified HTML to a new node and deal with it in the page template.
    const nodeData = {
      frontmatter: {
        path: frontmatter.path,
        index: frontmatter.index,
        titles: frontmatter.titles,
        sequence: frontmatter.sequence,
      },
      chunks: chunks,
      html: $.html(),
    }

    createNode({
      ...nodeData,
      id: createNodeId(nodeData.frontmatter.path),
      internal: {
        type: 'mySearchData',
        contentDigest: createContentDigest(nodeData)
      }
    })
  }))
}

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type Frontmatter {
      path: String!
      index: [Int]
      titles: [String]
      sequence: Int
    }

    type mySearchData implements Node {
      frontmatter: Frontmatter!
      chunks: JSON
      html: String
    }
  `)
}
