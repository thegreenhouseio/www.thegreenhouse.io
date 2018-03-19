module.exports = {
  siteMetadata: {
    title: 'The Greenhouse I/O',
    siteUrl: 'https://www.thegreenhouse.io',
    description: 'Personal / portfolio website for The Greenhouse.',
  },
  plugins: [
    'gatsby-plugin-typography', 
    {
      resolve:  'gatsby-plugin-favicon',
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
}