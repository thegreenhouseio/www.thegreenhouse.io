const FAVICON_HREF = '/assets/favicon.ico';

module.exports = {
  title: 'The Greenhouse I/O',

  meta: [
    { rel: 'shortcut icon', href: FAVICON_HREF },
    { rel: 'icon', href: FAVICON_HREF }
  ],

  devServer: {
    port: 1981,
    host: 'local.thegreenhouse.io'
  }

};