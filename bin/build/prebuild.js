import { execSync } from 'child_process';
import { glob } from 'glob';
import { lintSourceMarkdown } from './checks/lint_source_md.mjs';
import { lintSplitMarkdown } from './checks/lint_split_md.mjs';

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

const doInternalLinks = true;
const doHtmlCheck = true;
const doSpellCheck = true;
const doRepeatCheck = true;
const doWhitespaceCheck = true;
const doLatexCheck = true;
const doSourceLint = true;
const doSplitLint = true;

const linkChecker = 'bin/build/checks/links.pl';
const htmlChecker = 'bin/build/checks/html.pl';
const spellChecker = 'bin/build/checks/spellcheck.sh';
const repeatChecker = 'bin/build/checks/repeats.sh';
const whitespaceChecker = 'bin/build/checks/whitespace.pl';
const latexChecker = 'bin/build/checks/latex.pl';
const mdSplitter = 'bin/build/process_markdown.sh';

const sourceMarkdown = 'src/book.md';
const ourSpellings = 'src/spellings.en.pws';

const customReporter = {
  // https://tintin.mudhalla.net/info/xterm/
  // https://tintin.mudhalla.net/info/256color/
  info: (m) => {
    console.log('\x1b[38;5;19m%s\x1b[0m %s', 'info', m);
  },
  warn: (m) => {
    console.log('\x1b[38;5;130m%s\x1b[0m %s', 'warn', m);
  },
  error: (m) => {
    console.log('\x1b[38;5;160m%s\x1b[0m %s', 'error', m);
  },
};

function printLines(s, reporter) {
  s.split(/\r?\n/).forEach((line, i) => line && reporter.warn(line));
}

function runCheck(enabled, checker, messages, reporter) {
  let success = true;
  if (enabled) {
    reporter.info(messages.info);
    try {
      const out = checker();
      if (out !== '' && out !== null) {
        reporter.warn(messages.fail);
        printLines(out, reporter);
        success = false;
      }
    } catch (err) {
      reporter.warn(messages.error);
      printLines(err.toString(), reporter);
      success = false;
    }
  } else {
    reporter.warn(messages.skip);
  }
  return success;
}

// Set `exitToShell` to false to continue processing after running checks (e.g. while building)
export default function runChecks(
  reporter = customReporter,
  exitToShell = true,
) {
  var allOk = true;

  allOk &= runCheck(
    doInternalLinks,
    () => execSync(`${linkChecker} ${sourceMarkdown}`, { encoding: 'utf8' }),
    {
      info: 'Checking internal links...',
      fail: 'Found some bad internal links:',
      error: 'Unable to check internal links:',
      skip: 'Skipping internal link check',
    },
    reporter,
  );

  allOk &= runCheck(
    doHtmlCheck,
    () => execSync(`${htmlChecker} ${sourceMarkdown}`, { encoding: 'utf8' }),
    {
      info: 'Checking HTML...',
      fail: 'Found HTML issues:',
      error: 'Unable to check HTML:',
      skip: 'Skipping HTML check',
    },
    reporter,
  );

  allOk &= runCheck(
    doSpellCheck,
    () =>
      execSync(`${spellChecker} ${sourceMarkdown} ${ourSpellings}`, {
        encoding: 'utf8',
      }),
    {
      info: 'Performing spellcheck...',
      fail: 'Found some misspellings:',
      error: 'Unable to perform spellcheck:',
      skip: 'Skipping spellcheck',
    },
    reporter,
  );

  allOk &= runCheck(
    doRepeatCheck,
    () => execSync(`${repeatChecker} ${sourceMarkdown}`, { encoding: 'utf8' }),
    {
      info: 'Performing repeated words check...',
      fail: 'Found some repeated words:',
      error: 'Unable to perform repeat check:',
      skip: 'Skipping repeat check',
    },
    reporter,
  );

  allOk &= runCheck(
    doWhitespaceCheck,
    () =>
      execSync(`${whitespaceChecker} ${sourceMarkdown}`, { encoding: 'utf8' }),
    {
      info: 'Performing trailing whitespace check...',
      fail: 'Found trailing whitespace:',
      error: 'Unable to perform whitespace check:',
      skip: 'Skipping whitespace check',
    },
    reporter,
  );

  allOk &= runCheck(
    doLatexCheck,
    () => execSync(`${latexChecker} ${sourceMarkdown}`, { encoding: 'utf8' }),
    {
      info: 'Performing LaTeX check...',
      fail: 'Found LaTeX issues:',
      error: 'Unable to perform LaTeX check:',
      skip: 'Skipping LaTeX check',
    },
    reporter,
  );

  let sourceLintSucceeded = runCheck(
    doSourceLint,
    () => lintSourceMarkdown(sourceMarkdown),
    {
      info: 'Linting source markdown...',
      fail: 'Found some linting issues:',
      error: 'Unable to lint check source markdown:',
      skip: 'Skipping source markdown linting',
    },
    reporter,
  );
  allOk &= sourceLintSucceeded;

  reporter.info('Unpacking book source...');
  try {
    execSync(`${mdSplitter} ${sourceMarkdown}`);
  } catch (err) {
    reporter.error('Failed to unpack book source.');
    throw err;
  }

  if (sourceLintSucceeded) {
    allOk &= runCheck(
      doSplitLint,
      () =>
        lintSplitMarkdown(
          glob.sync('src/md/**/*.md', { ignore: 'src/md/annotated.md' }),
        ),
      {
        info: 'Linting split markdown...',
        fail: 'Found some linting issues:',
        error: 'Unable to lint check split markdown:',
        skip: 'Skipping split markdown linting',
      },
      reporter,
    );
  } else {
    reporter.warn('Skipping split markdown linting due to earlier errors');
  }

  if (exitToShell) {
    process.exit(allOk ? 0 : 2);
  }
}
