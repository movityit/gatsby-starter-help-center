module.exports = {
  siteMetadata: {
    title: `Supporto movity`,
    author: `Dominik Ferber`,
    // You'd normally use a description like
    // "Advice and answers by the MyCompany-Team"
    description: `Consigli e risposte alle domande più frequenti`,
    siteUrl: `https://help.dferber.de/`,
    language: "it",
    texts: {
      allCollectionsText: "Tutte le categorie",
      searchPlaceholderText: "Ricerca…",
      lastModifiedText: "Ultima modifica",
      publishedOnText: "Pubblicato il",
      writtenByText: "Scritto da",
      articlesInCollectionZeroText: "articoli in questa collezione",
      articlesInCollectionOneText: "articolo in questa collezione",
      articlesInCollectionTwoText: "articoli in questa collezione",
      articlesInCollectionMultipleText: "articoli in questa collezione",
    },
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsYaml`,
    "MarkdownRemark.frontmatter.collection": `CollectionsYaml`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: `mappings`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Help Center`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
   },
  ],
}


