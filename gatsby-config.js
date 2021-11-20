module.exports = {
  siteMetadata: {
    title: "Upgrading Ethereum",
    description: `A technical handbook on Ethereum's move to proof of stake and beyond`,
    author: `Ben Edgington (@benjaminion)`,
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
  ],
};
