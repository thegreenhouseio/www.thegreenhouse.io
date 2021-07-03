const { defaultReporter } = require('@web/test-runner');
const fs = require('fs');
const { junitReporter } = require('@web/test-runner-junit-reporter');
const path = require('path');

module.exports = {
  files: './src/**/*.spec.js',
  nodeResolve: true,
  reporters: [
    defaultReporter({ reportTestResults: true, reportTestProgress: true }),
    junitReporter({
      outputPath: './reports/test-results.xml'
    })
  ],
  coverage: true,
  coverageConfig: {
    reportDir: './reports'
  },
  plugins: [{
    name: 'import-css',
    transform(context) {
      if (context.response.is('css')) {
        const { url } = context.request;
        const body = fs.readFileSync(path.join(__dirname, url), 'utf-8');
        const cssInJsBody = `const css = "${body.replace(/\r?\n|\r/g, ' ')}";\nexport default css;`;

        return {
          body: cssInJsBody,
          headers: {
            'content-type': 'text/javascript'
          }
        };
      }
    }
  }]
};