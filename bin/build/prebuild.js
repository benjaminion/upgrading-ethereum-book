import { exec } from 'child_process';
import { promisify } from 'node:util';
import lintSourceMarkdown from './checks/lint_source_md.js';

// Performs the following prebuild tasks:
//  - Lints the source markdown
//  - Checks that internal document links look ok
//  - Checks that HTML tags are properly balanced
//  - Spellcheck
//  - Repeated words check
//  - Trailing whitespace check
//  - Linting of LaTeX expressions

const doSourceLint = true;
const doInternalLinks = true;
const doHtmlCheck = true;
const doSpellCheck = true;
const doRepeatCheck = true;
const doWhitespaceCheck = true;
const doLatexCheck = true;

const linkChecker = 'bin/build/checks/links.pl';
const htmlChecker = 'bin/build/checks/html.pl';
const spellChecker = 'bin/build/checks/spellcheck.sh';
const repeatChecker = 'bin/build/checks/repeats.pl';
const whitespaceChecker = 'bin/build/checks/whitespace.pl';
const latexChecker = 'bin/build/checks/latex.pl';

const sourceMarkdown = 'src/book.md';
const ourSpellings = 'src/spellings.en.pws';

async function execAsync(fn) {
  return promisify(exec)(fn).then((x) => x.stdout);
}

const checks = [
  {
    name: 'markdown lint',
    enabled: doSourceLint,
    checker: () => lintSourceMarkdown(sourceMarkdown),
  },
  {
    name: 'internal links',
    enabled: doInternalLinks,
    checker: () =>
      execAsync(`${linkChecker} ${sourceMarkdown}`, { encoding: 'utf8' }),
  },
  {
    name: 'HTML',
    enabled: doHtmlCheck,
    checker: () =>
      execAsync(`${htmlChecker} ${sourceMarkdown}`, { encoding: 'utf8' }),
  },
  {
    name: 'spellings',
    enabled: doSpellCheck,
    checker: () =>
      execAsync(`${spellChecker} ${sourceMarkdown} ${ourSpellings}`, {
        encoding: 'utf8',
      }),
  },
  {
    name: 'repeated words',
    enabled: doRepeatCheck,
    checker: () =>
      execAsync(`${repeatChecker} ${sourceMarkdown}`, { encoding: 'utf8' }),
  },
  {
    name: 'trailing whitespace',
    enabled: doWhitespaceCheck,
    checker: () =>
      execAsync(`${whitespaceChecker} ${sourceMarkdown}`, {
        encoding: 'utf8',
      }),
  },
  {
    name: 'LaTex',
    enabled: doLatexCheck,
    checker: () =>
      execAsync(`${latexChecker} ${sourceMarkdown}`, { encoding: 'utf8' }),
  },
];

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
  s.split(/\r?\n/).forEach((line) => line && reporter.warn(line));
}

async function runCheck({ name, enabled, checker }, reporter) {
  let success = true;
  if (enabled) {
    try {
      const out = await checker();
      if (out === '' || out === null) {
        reporter.info(`The ${name} check passed`);
      } else {
        reporter.warn(`Issues were found by ${name} check:`);
        printLines(out, reporter);
        success = false;
      }
    } catch (err) {
      reporter.warn(`An error occurred during ${name} check:`);
      printLines(err.toString(), reporter);
      success = false;
    }
  } else {
    reporter.warn(`Skipping ${name} check`);
  }
  return success;
}

// Set `exitToShell` to false to continue processing after running checks (e.g. while building)
export default async function runChecks(
  reporter = customReporter,
  exitToShell = true,
) {
  const results = await Promise.all(
    checks.map((check) => runCheck(check, reporter)),
  );

  if (exitToShell) {
    process.exit(results.every((x) => x) ? 0 : 2);
  }
}
