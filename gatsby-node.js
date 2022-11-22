const path = require('path')
const prebuild = require('./bin/build/prebuild')

// Set up a hook to pre-process the source file into split files, and perform various
// checking and linting operations prior to building.
exports.onPreInit = ({ reporter }) => {
  try {
    prebuild.runChecks(reporter)
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

exports.onCreateWebpackConfig = () => {
  // Node 18 uses openssl v3 which no longer supports md4 as a digest.
  // Unfortunately, md4 is hard-coded into file-loader@6.2.0, which breaks Webpack.
  // (See node_modules/file-loader/node_modules/loader-utils/lib/getHashDigest.js line 43.)
  // As a workaround we wrap crypto.createHash() to switch to md5 whenever md4 is used.
  const crypto = require('crypto');
  try {
    crypto.createHash('md4')
  } catch (e) {
    console.warn('Hash type `md4` is not supported by this Node version, using `md5`.')
    const origCreateHash = crypto.createHash
    crypto.createHash = (alg, opts) => {
      return origCreateHash(alg === 'md4' ? 'md5' : alg, opts)
    }
  }
}
