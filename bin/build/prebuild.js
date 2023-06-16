const execSync = require('child_process').execSync;
const glob = require('glob')
const lintSourceMarkdown = require('./checks/lint_source_md').lintSourceMarkdown
const lintSplitMarkdown = require('./checks/lint_split_md').lintSplitMarkdown

// Performs the following prebuild tasks:
//  - Checks that internal document links look ok
//  - Checks that HTML tags are properly balanced
//  - Spellcheck
//  - Repeated words check
//  - Trailing whitespace check
//  - Linting of LaTeX expressions
//  - Lints the source markdown
//  - Splits the source markdown into individual pages
//  - Lints the split markdown

const doInternalLinks = true
const doHtmlCheck = true
const doSpellCheck = true
const doRepeatCheck = true
const doWhitespaceCheck = true
const doLatexCheck = true
const doSourceLint = true
const doSplitLint = true

const linkChecker = 'bin/build/checks/links.pl'
const htmlChecker = 'bin/build/checks/html.pl'
const spellChecker = 'bin/build/checks/spellcheck.sh'
const repeatChecker = 'bin/build/checks/repeats.sh'
const whitespaceChecker = 'bin/build/checks/whitespace.pl'
const latexChecker = 'bin/build/checks/latex.pl'
const mdSplitter = 'bin/build/process_markdown.sh'

const sourceMarkdown = 'src/book.md'
const ourSpellings = 'src/spellings.txt'

const customReporter = {
  // https://tintin.mudhalla.net/info/xterm/
  // https://tintin.mudhalla.net/info/256color/
  info: function (m) { console.log('\x1b[38;5;19m%s\x1b[0m %s', 'info', m) },
  warn: function (m) { console.log('\x1b[38;5;130m%s\x1b[0m %s', 'warn', m) },
  error: function (m) { console.log('\x1b[38;5;160m%s\x1b[0m %s', 'error', m) },
}

function printLines(s, reporter) {
  s.split(/\r?\n/).forEach((line, i) => line && reporter(line))
}

function runCheck(
  enabled, checker, infoMessage, failMessage, errorMessage, skipMessage, reporter
) {
  let success = true
  if (enabled) {
    reporter.info(infoMessage)
    try {
      const out = checker()
      if (out !== '' && out !== null) {
        reporter.warn(failMessage)
        printLines(out, reporter.warn)
        success = false
      }
    } catch (err) {
      reporter.warn(errorMessage)
      printLines(err.toString(), reporter.warn)
      success = false
    }
  } else {
    reporter.warn(skipMessage)
  }
  return success
}

// Set `exitToShell` to false to continue processing after running checks (e.g. while building)
module.exports.runChecks = (reporter = customReporter, exitToShell = true) => {

  var allOk = true
  
  allOk &= runCheck(
    doInternalLinks,
    () => execSync(`${linkChecker} ${sourceMarkdown}`, {encoding: 'utf8'}),
    'Checking internal links...',
    'Found some bad internal links:',
    'Unable to check internal links:',
    'Skipping internal link check',
    reporter
  )

  allOk &= runCheck(
    doHtmlCheck,
    () => execSync(`${htmlChecker} ${sourceMarkdown}`, {encoding: 'utf8'}),
    'Checking HTML tags...',
    'Found unbalanced HTML tags:',
    'Unable to check HTML tags:',
    'Skipping HTML check',
    reporter
  )

  allOk &= runCheck(
    doSpellCheck,
    () => execSync(`${spellChecker} ${sourceMarkdown} ${ourSpellings}`, {encoding: 'utf8'}),
    'Performing spellcheck...',
    'Found some misspellings:',
    'Unable to perform spellcheck:',
    'Skipping spellcheck',
    reporter
  )

  allOk &= runCheck(
    doRepeatCheck,
    () => execSync(`${repeatChecker} ${sourceMarkdown}`, {encoding: 'utf8'}),
    'Performing repeated words check...',
    'Found some repeated words:',
    'Unable to perform repeat check:',
    'Skipping repeat check',
    reporter
  )

  allOk &= runCheck(
    doWhitespaceCheck,
    () => execSync(`${whitespaceChecker} ${sourceMarkdown}`, {encoding: 'utf8'}),
    'Performing trailing whitespace check...',
    'Found trailing whitespace:',
    'Unable to perform whitespace check:',
    'Skipping whitespace check',
    reporter
  )

  allOk &= runCheck(
    doLatexCheck,
    () => execSync(`${latexChecker} ${sourceMarkdown}`, {encoding: 'utf8'}),
    'Performing LaTeX check...',
    'Found LaTeX issues:',
    'Unable to perform LaTeX check:',
    'Skipping LaTeX check',
    reporter
  )

  let sourceLintSucceeded = runCheck(
    doSourceLint,
    () => lintSourceMarkdown(sourceMarkdown),
    'Linting source markdown...',
    'Found some linting issues:',
    'Unable to lint check source markdown:',
    'Skipping source markdown linting',
    reporter
  )
  allOk &= sourceLintSucceeded
  
  reporter.info('Unpacking book source...')
  try {
    execSync(`${mdSplitter} ${sourceMarkdown}`)
  } catch (err) {
    reporter.error('Failed to unpack book source.')
    throw err
  }

  if (sourceLintSucceeded) {
    allOk &= runCheck(
      doSplitLint,
      () => lintSplitMarkdown(glob.sync('src/md/**/*.md', {'ignore': 'src/md/annotated.md'})),
      'Linting split markdown...',
      'Found some linting issues:',
      'Unable to lint check split markdown:',
      'Skipping split markdown linting',
      reporter
    )
  } else {
    reporter.warn('Skipping split markdown linting due to earlier errors')
  }

  if (exitToShell) {
    process.exit(allOk ? 0 : 2)
  }
}
