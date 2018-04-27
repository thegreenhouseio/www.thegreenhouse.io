module.exports = {
  siteMetadata: {
    title: 'The Greenhouse I/O',
    siteUrl: 'https://www.thegreenhouse.io',
    description: 'Personal / portfolio website for The Greenhouse.'
  },
  plugins: [
    'gatsby-plugin-typography', 
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-117350131-1'
      }
    }, {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Owen Buckley - The Greenhouse I/O',
        short_name: 'tgh.io', // eslint-disable-line camelcase
        start_url: '/', // eslint-disable-line camelcase
        background_color: '#007acc', // eslint-disable-line camelcase
        theme_color: '#efefef', // eslint-disable-line camelcase
        display: 'minimal-ui',
        icon: 'src/favicon.jpg' // This path is relative to the root of the site.
      }
    }
  ]
};