/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteTitle: `Guarda Real`,
    defaultTitle: `Guarda Real`,
    siteTitleShort: `Posts`,
    siteDescription: `Guarda Real é um site sobre previdencia social infantil `,
    siteUrl: `https://guarda-real.netlify.app`,
    siteAuthor: `@danilex`,
    siteImage: ``,
    siteLanguage: `pt`,
    basePath: `/`,
    themeColor: `#012F59`,
    footer: ``
  },
  plugins: [
    `gatsby-plugin-layout`,
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-typescript",
      options: {}
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages")
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto", "Montserrat"]
        }
      }
    },
    "gatsby-plugin-favicon"
  ]
};
