module.exports = {
  siteMetadata: {
    title: 'The Greenhouse I/O',
    siteUrl: 'https://www.thegreenhouse.io',
    description: 'Personal / portfolio website for The Greenhouse.'
  },
  plugins: [
    'gatsby-plugin-typography', 
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-117350131-1',
        head: true
      }
    }, {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.jpg',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ]
};