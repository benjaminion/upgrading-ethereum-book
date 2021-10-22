module.exports = {
  siteMetadata: {
    title: "Upgrading Ethereum",
    description: `A technical handbook on Ethereum's move to proof of stake and beyond`,
    author: `Ben Edgington (@benjaminion)`,
  },
  pathPrefix: `/`,
  plugins: [
      {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-mathjax3`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener"
            }
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: `Quiet Light`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `images`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
  ],
};
