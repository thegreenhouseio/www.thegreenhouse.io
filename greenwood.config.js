import { greenwoodPluginGoogleAnalytics } from '@greenwood/plugin-google-analytics';
import { greenwoodPluginGraphQL } from '@greenwood/plugin-graphql';
import { greenwoodPluginImportCss } from '@greenwood/plugin-import-css';
import { greenwoodPluginPostCss } from '@greenwood/plugin-postcss';
const DESCRIPTION = 'Personal site and blog for Owen Buckley and The Greenhouse I/O.  Ideas are built here.';
const FAVICON_HREF = '/assets/favicon.ico';
const TITLE = 'The Greenhouse I/O';

export default {
  // TODO optimization: 'strict',

  title: TITLE,

  meta: [
    { name: 'description', content: DESCRIPTION },
    { name: 'twitter:creator', content: '@thegreenhouseio' },
    { name: 'twitter:site', content: '@thegreenhouseio' },
    { property: 'og:title', content: TITLE },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.thegreenhouse.io' },
    { property: 'og:image', content: '/assets/og-meta-preview.png' },
    { property: 'og:description', content: DESCRIPTION },
    { rel: 'shortcut icon', href: FAVICON_HREF },
    { rel: 'icon', href: FAVICON_HREF }
  ],

  devServer: {
    port: 51201
  },

  plugins: [
    greenwoodPluginGoogleAnalytics({
      analyticsId: 'UA-117350131-1'
    }),

    greenwoodPluginPostCss(),
    
    ...greenwoodPluginImportCss(),

    ...greenwoodPluginGraphQL()
  ],

  markdown: {
    plugins: [
      '@mapbox/rehype-prism'
    ]
  }

};