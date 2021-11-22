const path = require(`path`)
const execSync = require('child_process').execSync;

exports.onPreInit = ({reporter}) => {

  reporter.info("Checking internal links...")
  try {
    const out = execSync('bin/build/links.awk src/book.md src/book.md', {encoding: 'utf8'})
    if (out !== "") {
      reporter.warn("Found some bad internal links:")
      out.split(/\r?\n/).forEach((line, i) => reporter.warn(line))
    }
  } catch (err) {
    reporter.warn("Unable to check internal links:")
    err.toString().split(/\r?\n/).forEach((line, i) => reporter.warn(line))
  }

  reporter.info("Unpacking book source...")
  try {
    execSync('bin/build/update.sh')
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
