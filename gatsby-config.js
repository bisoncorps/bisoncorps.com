const config = require("./data/config.js")

module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    title: "Bisoncorps",
    ...config,
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bisoncorps",
        short_name: "Bisoncorps",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/img/favicon.png", // This path is relative to the root of the site.
      },
    },
  ],
}
