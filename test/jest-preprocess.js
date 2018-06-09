const babelOptions = {
  presets: ['react', 'env']
};

module.exports = require('babel-jest').createTransformer(babelOptions);