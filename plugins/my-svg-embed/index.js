const visit = require('unist-util-visit')
const { optimize } = require('svgo');
const fs = require('fs')
const path = require('path');
const getHashDigest = require('loader-utils/lib/getHashDigest')

// Inline SVG files into the Markdown AST

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

module.exports = ({ markdownAST }, pluginOptions) => {
  try {
    visit(markdownAST, "paragraph", node => {
      if (node.children[0].type == 'image') {
        image = node.children[0]
        if (image.url.endsWith('.svg')) {
          const data = fs.readFileSync(pluginOptions.directory + image.url, 'utf8')
          const basename = path.basename(image.url, '.svg')
          // We need to distinguish multiple SVGs on the same page by using "prefixIds"
          const digest = getHashDigest(basename, 'md5', 'base52').substring(0,4)
          const svg = optimize(data, {path: digest, plugins: plugins})
          node.type = 'html'
          node.value = '<div id="' + basename + '">' + svg.data + '</div>'
          node.children = undefined
        }
      }
    })
  } catch (err) {
    console.error(err)
  }

  return markdownAST
}
