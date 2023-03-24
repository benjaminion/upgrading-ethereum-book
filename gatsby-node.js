const path = require('path')
const prebuild = require('./bin/build/prebuild')

// Set up a hook to pre-process the source file into split files, and perform various
// checking and linting operations prior to building.
exports.onPreInit = ({ reporter }) => {
  try {
    prebuild.runChecks(reporter, false)
  } catch (err) {
    reporter.panicOnBuild('Could not run pre-build tasks,', err)
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/pageTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark {
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

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: pageTemplate,
    })
  })
}

// Suppress warning from mini-css-extract-plugin that seems to be spurious:
//
// warn chunk commons [mini-css-extract-plugin]
// Conflicting order. Following module has been added:
//  * css ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./src/css/custom.css
// despite it was not able to fulfill desired ordering with these modules:
//  * css ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/katex/dist/katex.min.css
//    - couldn't fulfill desired order of chunk group(s) component---src-templates-page-template-jshead
//    - while fulfilling desired order of chunk group(s) component---src-templates-page-template-js
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'develop') {
    actions.setWebpackConfig({
      ignoreWarnings: [
        /Conflicting order. Following module has been added:/,
      ],
    })
  }
}
