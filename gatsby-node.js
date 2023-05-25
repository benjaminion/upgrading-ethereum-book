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
