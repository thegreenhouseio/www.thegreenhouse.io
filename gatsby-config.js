module.exports = {
  siteMetadata: {
    title: 'The Greenhouse I/O - Building Your Future Together 👐 🌱 💻'
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