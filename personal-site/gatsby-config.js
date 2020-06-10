const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Anand Batjargal | SWE',
    description:
      'Personal website for Anand Batjargal. To showcase abilities, experience, projects, and contact information. More coming on the way.',
    keywords:
      'anand batjargal, anand, batjargal, software, software engineer, software developer, iOS engineer, iOS developer, web developer, full stack, front end, back end, full stack web developer, mongolian software engineer',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
