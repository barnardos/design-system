module.exports = {
  siteMetadata: {
    siteUrl: `https://design-system.barnardos.org.uk`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${
          process.env.CONTEXT !== "deploy-preview"
            ? process.env.GOOGLE_ANALYTICS_ID
            : "UA-000000-00"
        }`,
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`
  ]
};
