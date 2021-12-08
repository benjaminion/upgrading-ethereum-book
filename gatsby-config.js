const execSync = require('child_process').execSync;

function getGitHash() {
  try {
    return execSync('git log -1 --format="%h" 2>/dev/null', {encoding: 'utf8'}).replace(/(\r\n|\n|\r)/,"")
  } catch(e) {
    return "unknown"
  }
}

module.exports = {
  siteMetadata: {
    title: "Upgrading Ethereum",
    description: "A technical handbook on Ethereum's move to proof of stake and beyond",
    author: "Ben Edgington",
    copyright: "© Copyright 2021 ConsenSys",
    gitHash: getGitHash(),
    gitUrl: "https://github.com/benjaminion/upgrading-ethereum-book",
    licenceUrl: "",
    licence: "TBD",
  },
  pathPrefix: `/altair`,
  plugins: [
      {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/md`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          `gatsby-remark-autolink-headers`,
          'gatsby-remark-numbered-footnotes',
          `gatsby-remark-mathjax3`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "external noopener"
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `images`,
              ignoreFileExtensions: [],
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        ErrorDocument: `ErrorDocument 404 /altair/404.html`,
      },
    },
  ],
};
