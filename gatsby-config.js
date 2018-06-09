module.exports = {
  siteMetadata: {
    title: 'The Greenhouse I/O',
    siteUrl: 'https://www.thegreenhouse.io',
    description: 'Personal / portfolio website for The Greenhouse.'
  },
  plugins: [
    'gatsby-plugin-typography', 
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-117350131-1',
        head: true
      }
    }
  ]
};