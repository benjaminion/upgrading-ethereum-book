const path = require(`path`)
const execSync = require('child_process').execSync;

exports.onPreInit = ({reporter}) => {
  reporter.info("Unpacking book source...")
  try {
    execSync('bin/update.sh')
  } catch (err) {
    reporter.panic("Failed to unpack book source.", err)
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
