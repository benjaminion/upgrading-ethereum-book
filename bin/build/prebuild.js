const execSync = require('child_process').execSync;
const markdownlint = require('markdownlint')
const glob = require('glob')

// Performs the following prebuild tasks:
//  - Checks that internal document links look ok
//  - Spellcheck
//  - Lints the source markdown (see lintSourceMarkdown in this file)
//  - Splits the source markdown into individual pages
//  - Lints the split markdown (see lintSplitMarkdown in this file)

const doInternalLinks = true
const doSpellCheck = true
const doSourceLint = true
const doSplitLint = true

const linkChecker = 'bin/build/links.pl'
const spellChecker = 'bin/build/spellcheck.sh'
const mdSplitter = 'bin/build/update.sh'

const sourceMarkdown = 'src/book.md'
const ourSpellings = 'src/spellings.txt'

module.exports.runChecks = (reporter) => {

  if (!reporter) {
    reporter = {
      // https://tintin.mudhalla.net/info/xterm/
      // https://tintin.mudhalla.net/info/256color/
      info: function (m) { console.log('\x1b[38;5;19m%s\x1b[0m %s', 'info', m) },
      warn: function (m) { console.log('\x1b[38;5;130m%s\x1b[0m %s', 'warn', m) },
      error: function (m) { console.log('\x1b[38;5;160m%s\x1b[0m %s', 'error', m) },
    }
  }

  var sourceLintSucceeded = true

  if (doInternalLinks) {
    reporter.info('Checking internal links...')
    try {
      const out = execSync(`${linkChecker} ${sourceMarkdown}`, {encoding: 'utf8'})
      if (out !== '') {
        reporter.warn('Found some bad internal links:')
        printLines(out, reporter.warn)
      }
    } catch (err) {
      reporter.warn('Unable to check internal links:')
      printLines(err.toString(), reporter.warn)
    }
  } else {
    reporter.warn('Skipping internal link check')
  }

  if (doSpellCheck) {
    reporter.info('Performing spellcheck...')
    try {
      const out = execSync(`${spellChecker} ${sourceMarkdown} ${ourSpellings}`, {encoding: 'utf8', stdio: 'pipe'})
      if (out !== '') {
        reporter.warn('Found some misspellings:')
        printLines(out, reporter.warn)
      }
    } catch (err) {
      reporter.warn('Unable to perform spellcheck:')
      printLines(err.toString(), reporter.warn)
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
        printLines(out, reporter.warn)
        sourceLintSucceeded = false
      }
    } catch (err) {
      reporter.warn('Unable to lint check source markdown:')
      printLines(err.toString(), reporter.warn)
      sourceLintSucceeded = false
    }
  } else {
    reporter.warn('Skipping source markdown linting')
  }

  reporter.info('Unpacking book source...')
  try {
    execSync(mdSplitter)
  } catch (err) {
    reporter.error('Failed to unpack book source.')
    throw err
  }

  if (doSplitLint) {
    if (sourceLintSucceeded) {
      reporter.info('Linting split markdown...')
      try {
        const splitMarkdown = glob.sync('src/md/**/*.md', {'ignore': 'src/md/annotated.md'})
        const out = lintSplitMarkdown(splitMarkdown)
        if (out !== null) {
          reporter.warn('Found some linting issues:')
          printLines(out, reporter.warn)
        }
      } catch (err) {
        reporter.warn('Unable to lint check split markdown:')
        printLines(err.toString(), reporter.warn)
      }
    } else {
      reporter.warn('Skipping split markdown linting due to earlier errors')
    }
  } else {
    reporter.warn('Skipping split markdown linting')
  }

}

function printLines(s, reporter) {
  s.split(/\r?\n/).forEach((line, i) => line && reporter(line))
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

      // link-image-reference-definitions - we use these as TODO comments
      'MD053': false,
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

      // link-image-reference-definitions - we use these as TODO comments
      'MD053': false,
    }
  }

  const result = markdownlint.sync(options)

  return (Object.values(result).filter(x => x.length > 0).length > 0)
    ? result.toString()
    : null
}
