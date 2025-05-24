import { execSync } from 'child_process';

function getGitHash() {
  try {
    return execSync('git log -1 --format="%h" 2>/dev/null', {encoding: 'utf8'}).replace(/(\r\n|\n|\r)/, '')
  } catch(e) {
    return 'unknown'
  }
}

function getGitBranch() {
  try {
    return execSync('git branch --show-current 2>/dev/null', {encoding: 'utf8'}).replace(/(\r\n|\n|\r)/, '');
  } catch(e) {
    return 'unknown';
  }
}

const date = new Date().toISOString().substr(0, 16).replace('T', ' ') + ' UTC';
const version = getGitBranch();
const hostname = 'https://eth2book.info';
const canonical = hostname + '/latest';

const Metadata = {
  title: 'Upgrading Ethereum',
  description: 'A technical handbook on Ethereum\'s move to proof of stake and beyond',
  author: 'Ben Edgington',
  gitHash: getGitHash(),
  gitUrl: 'https://github.com/benjaminion/upgrading-ethereum-book',
  date: date,
  licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  licence: 'CC BY-SA 4.0',
  hostname: hostname,
  version: version,
  canonical: canonical,
}

const SearchOptions = {
  enabled: true,
  // Matching elements have their text added to the index. First match wins.
  indexFile: 'search-index.json',
  chunkTypes: [
    {query: 'figcaption', label: 'Figure caption'},
    {query: 'section[data-footnotes] li', label: 'Footnote'},
    {query: 'li', label: 'List item'},
    {query: 'pre', label: 'Code'},
    {query: 'table', label: 'Table'},
    {query: 'h3, h4, h5, h6', label: 'Heading', weight: 5},
    {query: 'p', label: 'Paragraph'},
  ],
  exclude: {
    // Note, only pages under src/md/pages have a "hide" property.
    frontmatter: [{hide: true}],
    // No point indexing these.
    pages: ['/', '/404/','/contents/','/search/', '/annotated-spec/'],
    // Elements matching this query are ignored completely, including their text:
    ignore: 'svg, details, mtable, mrow, [aria-hidden="true"], .footnote-ref',
  }
};

export { Metadata, SearchOptions };
