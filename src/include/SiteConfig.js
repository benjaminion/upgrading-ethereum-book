import { execSync } from 'child_process';

function getGitHash() {
  try {
    return execSync('git log -1 --format="%h" 2>/dev/null', {
      encoding: 'utf8',
    }).replace(/(\r\n|\n|\r)/, '');
  } catch (e) {
    return 'unknown';
  }
}

function getGitBranch() {
  try {
    return execSync('git branch --show-current 2>/dev/null', {
      encoding: 'utf8',
    }).replace(/(\r\n|\n|\r)/, '');
  } catch (e) {
    return 'unknown';
  }
}

const date = new Date().toISOString().substr(0, 16).replace('T', ' ') + ' UTC';
const version = getGitBranch();
const hostname = 'https://eth2book.info';
const canonical = hostname + '/latest';

const Metadata = {
  title: 'Upgrading Ethereum',
  description:
    "A technical handbook on Ethereum's move to proof of stake and beyond",
  author: 'Ben Edgington',
  gitHash: getGitHash(),
  gitUrl: 'https://github.com/benjaminion/upgrading-ethereum-book',
  date: date,
  licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  licence: 'CC BY-SA 4.0',
  hostname: hostname,
  version: version,
  canonical: canonical,
};

const SearchOptions = {
  enabled: true,
  indexFile: 'search-index.json',
  // Matching elements have their text added to the index. First match wins.
  // Note that these are not full CSS selectors - they can only match the current element.
  // See https://github.com/syntax-tree/hast-util-select#matchesselector-node-space
  chunkTypes: [
    { query: 'figcaption', label: 'Figure caption' },
    { query: 'li[id^="fn-"]', label: 'Footnote' },
    { query: 'li', label: 'List item' },
    { query: 'pre', label: 'Code' },
    { query: 'table', label: 'Table' },
    { query: 'h3, h4', label: 'Heading', weight: 10 },
    { query: 'h5, h6', label: 'Minor Heading', weight: 5 },
    { query: 'p', label: 'Paragraph' },
  ],
  exclude: {
    // Note, only pages under src/md/pages have a "hide" property.
    frontmatter: [{ key: 'hide', value: true }],
    // No point indexing these.
    pages: ['/', '/404/', '/contents/', '/search/', '/annotated-spec/'],
    // Elements matching this query are ignored completely, including their text:
    ignore:
      'svg, details, mtable, mrow, [aria-hidden="true"], a[id^="fnref-"], a.data-footnote-backref',
  },
};

export { Metadata, SearchOptions };
