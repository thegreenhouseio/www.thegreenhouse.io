import { greenwoodPluginGoogleAnalytics } from '@greenwood/plugin-google-analytics';
import { greenwoodPluginGraphQL } from '@greenwood/plugin-graphql';
import { greenwoodPluginImportCss } from '@greenwood/plugin-import-css';
import { greenwoodPluginPostCss } from '@greenwood/plugin-postcss';
import { greenwoodPluginRendererPuppeteer } from '@greenwood/plugin-renderer-puppeteer';

export default {
  // TODO optimization: 'strict',

  devServer: {
    port: 51201
  },

  plugins: [
    greenwoodPluginPostCss(),
    greenwoodPluginImportCss(),
    greenwoodPluginGraphQL(),
    greenwoodPluginRendererPuppeteer(),
    greenwoodPluginGoogleAnalytics({
      analyticsId: 'UA-117350131-1'
    })
  ],

  markdown: {
    plugins: [
      '@mapbox/rehype-prism'
    ]
  }
};