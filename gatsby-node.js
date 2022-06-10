const path = require('path')
const execSync = require('child_process').execSync;
const markdownlint = require('markdownlint')
const glob = require('glob')

// Set up a hook to pre-process the source file into split files, and perform various
// checking and linting operations prior to building.
exports.onPreInit = ({ reporter }) => {

  const doInternalLinks = true
  const doSpellCheck = true
  const doSourceLint = true
  const doSplitLint = true

  const sourceMarkdown = 'src/book.md'
  const splitMarkdown = glob.sync('src/md/**/*.md', {'ignore': 'src/md/annotated.md'})

  var sourceLintSucceeded = true

  if (doInternalLinks) {
    reporter.info('Checking internal links...')
    try {
      const out = execSync(`bin/build/links.awk ${sourceMarkdown} ${sourceMarkdown}`, {encoding: 'utf8'})
      if (out !== '') {
        reporter.warn('Found some bad internal links:')
        out.split(/\r?\n/).forEach((line, i) => line && reporter.warn(line))
      }
    } catch (err) {
      reporter.warn('Unable to check internal links:')
      err.toString().split(/\r?\n/).forEach((line, i) => reporter.warn(line))
    }
  } else {
    reporter.warn('Skipping internal link check')
  }

  if (doSpellCheck) {
    reporter.info('Performing spellcheck...')
    try {
      const out = execSync(`bin/build/spellcheck.sh ${sourceMarkdown} bin/build/spellcheck_my_words.txt`, {encoding: 'utf8'})
      if (out !== '') {
        reporter.warn('Found some misspellings:')
        out.split(/\r?\n/).forEach((line, i) => line && reporter.warn(line))
      }
    } catch (err) {
      reporter.warn('Unable to perform spellcheck:')
      err.toString().split(/\r?\n/).forEach((line, i) => reporter.warn(line))
    }
  } else {
    reporter.warn('Skipping spellcheck')
  }

  if (doSourceLint) {
    reporter.info('Linting source markdown...')
    try {
      const out = lintSourceMarkdown(sourceMarkdown)
      if (out !== null) {
        reporter.warn('Found some linting issues:')
        out.split(/\r?\n/).forEach((line, i) => line && reporter.warn(line))
        sourceLintSucceeded = false
      }
    } catch (err) {
      reporter.warn('Unable to lint check source markdown:')
      err.toString().split(/\r?\n/).forEach((line, i) => reporter.warn(line))
      sourceLintSucceeded = false
    }
  } else {
    reporter.warn('Skipping source markdown linting')
  }

  reporter.info('Unpacking book source...')
  try {
    execSync('bin/build/update.sh')
  } catch (err) {
    reporter.panic('Failed to unpack book source.', err)
  }

  if (doSplitLint) {
    if (sourceLintSucceeded) {
      reporter.info('Linting split markdown...')
      try {
        const out = lintSplitMarkdown(splitMarkdown)
        if (out !== null) {
          reporter.warn('Found some linting issues:')
          out.split(/\r?\n/).forEach((line, i) => line && reporter.warn(line))
        }
      } catch (err) {
        reporter.warn('Unable to lint check split markdown:')
        err.toString().split(/\r?\n/).forEach((line, i) => reporter.warn(line))
      }
    } else {
      reporter.warn('Skipping split markdown linting due to earlier errors')
    }
  } else {
    reporter.warn('Skipping split markdown linting')
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

//
// See https://github.com/DavidAnson/markdownlint for the rules and options
//

// Lint check the source markdown file.
function lintSourceMarkdown(file) {

  const options = {
    'files': [ file ],
    'config': {
      'default': true,

      // Start unordered lists with two spaces of indentation
      'MD007': {
        'indent': 2,
        'start_indented': true,
        'start_indent': 2,
      },

      // We don't want any trailing spaces
      'MD009': {
        'strict': true,
      },

      // Some headings end in ! or ?
      'MD026': {
        'punctuation': '.,;:',
      },

      // We fence all block code with backticks
      'MD046': {
        "style": "fenced",
      },

      // Emphasis style
      'MD049': {
        'style': 'underscore',
      },

      // We have long lines
      'MD013': false,

      // Duplicate headings are ok (they appear on different pages after pre-processing)
      'MD024': false,

      // Multiple top-level titles are ok (they appear on different pages after pre-processing)
      'MD025': false,

      // We have inline html
      'MD033': false,

      // no-space-in-emphasis Spaces inside emphasis markers - gives false positives
      'MD037': false,
    }
  }

  const result = markdownlint.sync(options)

  return (result[file].length > 0) ? result.toString() : null
}

// Lint check the markdown files after they have been split out from the source document.
// The rules differ slightly from the rules for the original source.
function lintSplitMarkdown(files) {

  const options = {
    'files': files,
    'config': {
      'default': true,

      // Start unordered lists with two spaces of indentation
      'MD007': {
        'indent': 2,
        'start_indented': true,
        'start_indent': 2,
      },

      // We don't want any trailing spaces
      'MD009': {
        'strict': true,
      },

      // Some headings end in ! or ?
      'MD026': {
        'punctuation': '.,;:',
      },

      // We fence all block code with backticks
      'MD046': {
        "style": "fenced",
      },

      // Emphasis style
      'MD049': {
        'style': 'underscore',
      },

      // Trailing blank lines are hard to avoid when doing the split
      'MD012': false,

      // We have long lines
      'MD013': false,

      // We have inline html
      'MD033': false,

      // no-space-in-emphasis Spaces inside emphasis markers - gives false positives
      'MD037': false,

      // We don't expect the very first line to be a top-level heading (due to inserted <div>)
      'MD041': false,
    }
  }

  const result = markdownlint.sync(options)

  return (Object.values(result).filter(x => x.length > 0).length > 0)
    ? result.toString()
    : null
}
