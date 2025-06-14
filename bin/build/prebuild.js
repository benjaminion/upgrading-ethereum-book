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

async function execAsync(cmd) {
  return promisify(exec)(cmd, { encoding: 'utf8' }).then((x) => x.stdout);
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
    checker: () => execAsync(`${linkChecker} ${sourceMarkdown}`),
  },
  {
    name: 'HTML',
    enabled: doHtmlCheck,
    checker: () => execAsync(`${htmlChecker} ${sourceMarkdown}`),
  },
  {
    name: 'spellings',
    enabled: doSpellCheck,
    checker: () =>
      execAsync(`${spellChecker} ${sourceMarkdown} ${ourSpellings}`),
  },
  {
    name: 'repeated words',
    enabled: doRepeatCheck,
    checker: () => execAsync(`${repeatChecker} ${sourceMarkdown}`),
  },
  {
    name: 'trailing whitespace',
    enabled: doWhitespaceCheck,
    checker: () => execAsync(`${whitespaceChecker} ${sourceMarkdown}`),
  },
  {
    name: 'LaTeX',
    enabled: doLatexCheck,
    checker: () => execAsync(`${latexChecker} ${sourceMarkdown}`),
  },
];

// https://tintin.mudhalla.net/info/256color/
const colour = {
  blue: (s) => '\x1b[38;5;19m' + s + '\x1b[0m',
  orange: (s) => '\x1b[38;5;130m' + s + '\x1b[0m',
  green: (s) => '\x1b[38;5;34m' + s + '\x1b[0m',
};

const myLogger = {
  info: (m) => {
    console.log(colour.blue('info ') + m);
  },
  warn: (m) => {
    console.log(colour.orange('warn ') + m);
  },
};

function printLines(s, logger) {
  s.split(/\r?\n/).forEach((line) => line && logger.warn(line));
}

async function runCheck({ name, enabled, checker }, logger) {
  let success = true;
  if (enabled) {
    try {
      const out = await checker();
      if (out === '' || out === null) {
        logger.info(colour.green('\u2713') + ` Passed ${name} check`);
      } else {
        logger.warn(`Issues were found by ${name} check:`);
        printLines(out, logger);
        success = false;
      }
    } catch (err) {
      logger.warn(`An error occurred during ${name} check:`);
      printLines(err.toString(), logger);
      success = false;
    }
  } else {
    logger.warn(`Skipping ${name} check`);
  }
  return success;
}

// Set `exitToShell` to false to continue processing after running checks (e.g. while building)
export default async function runChecks(logger = myLogger, exitToShell = true) {
  const results = await Promise.all(
    checks.map((check) => runCheck(check, logger)),
  );

  if (exitToShell) {
    process.exit(results.every((x) => x) ? 0 : 2);
  }
}
