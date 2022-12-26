const visit = require('unist-util-visit')
const svgo = require('svgo')
const fs = require('fs')
const path = require('path')
const getHashDigest = require('loader-utils/lib/getHashDigest')

// Inline SVG files into the Markdown AST

// SVGO doesn't really support adding elements, and the API changes.
// The below is based on code from the "reusePaths" plugin.
const addTitle = {
  name: "addTitle",
  type: "visitor",
  active: true,
  fn: (ast, params) => {
    return {
      element: {
        exit: (node, parentNode) => {
          if (node.name === "svg" && parentNode.type === "root") {
            const hasTitle = node.children.some(
              (child) => child.type === "element" && child.name === "title"
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
                type: "text",
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
  {
    name: 'addAttributesToSVGElement',
    params: {attributes: [{'role': 'img'}]},
  },
]

var addTitleSettings =  {
  name: addTitle.name,
  type: addTitle.type,
  active: addTitle.active,
  fn: addTitle.fn,
  params: undefined,
}

module.exports = ({ markdownAST }, pluginOptions) => {
  try {
    visit(markdownAST, "paragraph", node => {
      if (node.children[0].type == 'image') {
        image = node.children[0]

        if (image.url.endsWith('.svg')) {
          const originalSvg = fs.readFileSync(pluginOptions.directory + image.url, 'utf8')
          const basename = path.basename(image.url, '.svg')

          // We need to distinguish multiple SVGs on the same page by using "prefixIds"
          const digest = getHashDigest(basename, 'md5', 'base52').substring(0,4)

          // Configure our custom plugin for SVGO that adds title element
          addTitleSettings['params'] = {titleText: image.alt}
          const svg = svgo.optimize(
            originalSvg,
            {
              path: digest,
              plugins: plugins.concat([addTitleSettings])
            }
          )

          // Modify the current node in-place
          node.type = 'html'
          node.value = '<div id="' + basename + '">' + svg.data + '</div>'
          node.children = []
        }
      }
    })
  } catch (err) {
    console.error(err)
  }

  return markdownAST
}
