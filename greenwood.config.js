const pluginGraphQL = require('@greenwood/plugin-graphql');
const pluginImportCSS = require('@greenwood/plugin-import-css');
const pluginPostcss = require('@greenwood/plugin-postcss');
const DESCRIPTION = 'Personal site and blog for Owen Buckley and The Greenhouse I/O.  Ideas are built here.';
const FAVICON_HREF = '/assets/favicon.ico';
const TITLE = 'The Greenhouse I/O';

module.exports = {
  // TODO optimization: 'strict',

  title: TITLE,

  meta: [
    { name: 'description', content: DESCRIPTION },
    { name: 'twitter:creator', content: '@thegreenhouseio' },
    { name: 'twitter:site', content: '@thegreenhouseio' },
    { property: 'og:title', content: TITLE },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.thegreenhouse.io' },
    { property: 'og:image', content: 'https://s3.amazonaws.com/www.thegreenhouse.io/static/banner.4b3f4ebd.jpg' },
    { property: 'og:description', content: DESCRIPTION },
    { rel: 'shortcut icon', href: FAVICON_HREF },
    { rel: 'icon', href: FAVICON_HREF }
  ],

  devServer: {
    port: 51201
  },

  plugins: [

    pluginPostcss(),
    
    ...pluginImportCSS(),

    ...pluginGraphQL()
  ],

  markdown: {
    plugins: [
      '@mapbox/rehype-prism'
    ]
  }

};