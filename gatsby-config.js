module.exports = {
  siteMetadata: {
    title: "Ethereum 2.0 Explained",
    description: `A deep dive into Ethereum on proof of stake`,
    author: `Ben Edgington (@benjaminion)`,
  },
  pathPrefix: `/eth2-explained`,
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
