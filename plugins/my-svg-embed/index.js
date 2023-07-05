const visit = require('unist-util-visit')
const svgo = require('svgo')
const fs = require('fs')
const path = require('path')
const { getHashDigest } = require('loader-utils')
const { md5 } = require('gatsby-core-utils')

// Inline SVG files into the Markdown AST

// SVGO doesn't really support adding elements, and the API changes.
// The below is based on code from the "reusePaths" plugin.
const addTitle = {
  name: 'addTitle',
  type: 'visitor',
  active: true,
  fn: (ast, params) => {
    return {
      element: {
        exit: (node, parentNode) => {
          if (node.name === 'svg' && parentNode.type === 'root') {
            const hasTitle = node.children.some(
              (child) => child.type === 'element' && child.name === 'title'
            )
            if (!hasTitle) {
              const titleElement = {
                type: 'element',
                name: 'title',
                attributes: {},
                children: [],
              }
              Object.defineProperty(titleElement, 'parentNode', {
                writable: true,
                value: node,
              });
              const titleContents = {
                type: 'text',
                value: params.titleText,
              }
              Object.defineProperty(titleContents, 'parentNode', {
                writable: true,
                value: titleElement,
              });
              titleElement.children.push(titleContents)
              node.children.unshift(titleElement);
            }
          }
        },
      },
    }
  },
}

// See https://www.npmjs.com/package/svgo
const plugins = [
  'preset-default',
  'prefixIds',
  'removeDimensions',
  'removeXMLNS',
  {
    name: 'addAttributesToSVGElement',
    params: {attribute: {'role': 'img'}},
  },
]

const addTitleSettings =  {
  name: addTitle.name,
  type: addTitle.type,
  active: addTitle.active,
  fn: addTitle.fn,
  params: undefined,
}

const addAttributes = {
    name: 'addAttributesToSVGElement',
    params: undefined,
}

module.exports = ({ markdownAST, cache }, pluginOptions) => {

  try {
    visit(markdownAST, 'paragraph', async node => {
      if (node.children[0].type == 'image') {
        const image = node.children[0]

        if (image.url.endsWith('.svg')) {

          const originalSvg = await fs.readFileSync(pluginOptions.directory + image.url, 'utf8')
          const fileHash = await md5(originalSvg)
          const basename = path.basename(image.url, '.svg')

          var svgString
          cache.get(fileHash).then(ret => {
            if (ret) {

              svgString = ret

            } else {

              // We need to distinguish multiple SVGs on the same page by using "prefixIds"
              const digest = getHashDigest(basename, 'md5', 'base52', 4)

              // Configure the SVGO addAttributes plugin to add an ID to SVG element
              addAttributes['params'] = {attribute: {id: basename}}

              // Configure our custom plugin that adds a title element
              addTitleSettings['params'] = {titleText: image.alt}

              const svg = svgo.optimize(
                originalSvg,
                {
                  path: digest,
                  plugins: plugins.concat([addTitleSettings, addAttributes])
                }
              )

              svgString = svg.data
              cache.set(fileHash, svgString)
            }

            // Modify the current node in-place
            node.type = 'html'
            node.value = svgString
            node.children = []
          })
        }
      }
    })
  } catch (err) {
    console.error(err)
  }

  return markdownAST
}
