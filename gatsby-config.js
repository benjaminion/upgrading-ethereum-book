const execSync = require('child_process').execSync;

const date = new Date().toISOString().substr(0, 16).replace('T', ' ') + ' UTC';
const version = 'bellatrix';

function getGitHash() {
  try {
    return execSync('git log -1 --format="%h" 2>/dev/null', {encoding: 'utf8'}).replace(/(\r\n|\n|\r)/, '')
  } catch(e) {
    return 'unknown'
  }
}

module.exports = {
  siteMetadata: {
    title: 'Upgrading Ethereum',
    description: 'A technical handbook on Ethereum\'s move to proof of stake and beyond',
    author: 'Ben Edgington',
    gitHash: getGitHash(),
    gitUrl: 'https://github.com/benjaminion/upgrading-ethereum-book',
    date: date,
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    licence: 'CC BY-SA 4.0',
  },
  pathPrefix: '/' + version,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/md`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        gfm: true,
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-numbered-footnotes',
          'gatsby-remark-katex',
          {
            resolve: 'my-tooltips',
            options: {
              file: `${__dirname}/src/constants.json`,
            }
          },
          {
            resolve: 'my-svg-embed',
            options: {
              directory: `${__dirname}/src/`,
            }
          },
          'my-strip-html-comments',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'external noopener',
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
              aliases: {code: 'text'},
            },
          },
        ],
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        ErrorDocument: 'ErrorDocument 404 /' + version + '/404.html',
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://eth2book.info/matomo',
        siteUrl: 'https://eth2book.info/' + version,
        matomoPhpScript: 'matomo.php',
        matomoJsScript: 'matomo.js',
        disableCookies: true,
      },
    },
    {
      resolve: 'my-search-index',
      options: {
        enabled: true,
        chunkTypes: {
          p: 'Paragraph',
          li: 'List item',
          pre: 'Code',
          table: 'Table',
          h3: 'Heading',
          h4: 'Heading',
          h5: 'Heading',
          h6: 'Heading',
        },
        // Note, only pages under src/md/pages have a "hide" property
        pageFilter: '{frontmatter: {hide: {eq: false}}}',
        exclude: {
          // Speed up the build (these are excluded from the index by pageFilter, anyway)
          pages: ['/404.html', '/annotated-spec/', '/contact/', '/contents/', '/search/', '/'],
          tags: ['nav', 'footer', 'aside', 'svg', 'details', 'mtable', 'mrow'],
          attributes: [
            {name: 'id', value: 'page-navi'},
            {name: 'class', value: 'prevnext'},
            {name: 'aria-hidden', value: 'true'},
            {name: 'id', value: 'gatsby-announcer'},
            {name: 'class', value: 'fn-span'},
            {name: 'class', value: 'footnote-ref'},
          ],
        }
      },
    }
  ],
  flags: {
    DEV_SSR: true,
  },
};
