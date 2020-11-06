require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Alexandre Mouriec",
    titleTemplate: "%s · Full Stack Developer",
    description: "Alexandre Mouriec's Portfolio",
    url: process.env.API_URL || "http://localhost:1337", // No trailing slash allowed!
    image: "/icon-192x192.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@mrcalexandre",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["project", "experience"],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "alexandre-mouriec-portfolio",
        short_name: "Alexandre Mouriec",
        start_url: "/",
        background_color: "#f5f5f5",
        theme_color: "#4FD1C5",
        display: "minimal-ui",
        icon: "src/images/favicon.jpg",
      },
    },
    "gatsby-plugin-offline",
  ],
}
