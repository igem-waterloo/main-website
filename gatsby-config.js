/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Waterloo iGEM`,
    description: `Synthetic Biology Design Team`,
  },
  /* Uncomment to debug on gh-pages branch */
  /*pathPrefix: `/main-website`,*/
  plugins: [`gatsby-plugin-postcss`, `gatsby-plugin-react-helmet`],
}
