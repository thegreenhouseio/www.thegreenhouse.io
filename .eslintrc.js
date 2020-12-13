module.exports = {
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    'comma-dangle': [2, 'never'],
    'no-cond-assign': 2,
    'no-console': 0,
    'no-constant-condition': 2,
    'no-control-regex': 0,
    'no-debugger': 0,
    'no-dupe-args': 0,
    'no-dupe-keys': 0,
    'no-duplicate-case': 2,
    'no-empty-character-class': 0,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'all', {
      'conditionalAssign': false,
      'returnAssign': false,
      'nestedBinaryExpressions': false
    }],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 0,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 0,
    'no-regex-spaces': 0,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 0,
    'no-unexpected-multiline': 0,
    'accessor-pairs': 2,
    'block-scoped-var': 2,
    'complexity': 2,
    'consistent-return': 0,
    'curly': 2,
    'default-case': 2,
    'dot-notation': 2,
    'dot-location': 0,
    'eqeqeq': [2, 'allow-null'],
    'guard-for-in': 0,
    'no-alert': 0,
    'no-caller': 0,
    'no-div-regex': 0,
    'no-else-return': 0,
    'no-empty-label': 0,
    'no-eq-null': 0,
    'no-eval': 2,
    'no-extend-native': 0,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': [2, {
      'number': true,
      'string': true,
      'boolean': false
    }],
    'no-implied-eval': 2,
    'no-invalid-this': 0,
    'no-iterator': 2,
    'no-labels': 0,
    'no-lone-blocks': 0,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 0,
    'no-native-reassign': 0,
    'no-new-func': 0,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 0,
    'no-octal': 0,
    'no-param-reassign': 0,
    'no-process-env': 0,
    'no-proto': 0,
    'no-redeclare': 2,
    'no-return-assign': 0,
    'no-script-url': 0,
    'no-self-compare': 0,
    'no-sequences': 0,
    'no-throw-literal': 2,
    'no-unused-expressions': 0,
    'no-useless-call': 0,
    'no-void': 0,
    'no-warning-comments': [1, { 
      'terms': [
        'todo',
        ' fixme',
        ' TODO',
        ' FIXME'
      ],
      'location': 'anywhere'
    }],
    'no-with': 0,
    'radix': 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'inside'],
    'yoda': 0,
    'strict': [2, 'global'],
    'init-declarations': 0,
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 0,
    'no-shadow-restricted-names': 0,
    'no-shadow': 0,
    'no-undef-init': 0,
    'no-undef': 0,
    'no-undefined': 0,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'callback-return': 0,
    'handle-callback-err': 2,
    'no-mixed-requires': 0,
    'no-new-require': 0,
    'no-path-concat': 2,
    'no-process-exit': 2,
    'no-restricted-modules': 0,
    'no-sync': 0,
    'array-bracket-spacing': 2,
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': 2,
    'comma-spacing': 2,
    'comma-style': [2, 'last'],
    'computed-property-spacing': 0,
    'consistent-this': [0, 'self', 'that'],
    'eol-last': 0,
    'func-names': 0,
    'func-style': 0,
    'id-length': 0,
    'indent': [2, 2, {
      'VariableDeclarator': 1,
      'SwitchCase': 1,
      'ignoredNodes': [
        'TemplateLiteral'
      ]
    }],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'lines-around-comment': 0,
    'linebreak-style': 0,
    'max-nested-callbacks': [2, { 'maximum': 8 }],
    'new-cap': 2,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 0,
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-multiple-empty-lines': [2, { 'max': 1 }],
    'no-nested-ternary': 0,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 0,
    'no-underscore-dangle': [2, { 'allowAfterThis': true }],
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'always', {}],
    'one-var': 0,
    'operator-assignment': 0,
    'operator-linebreak': 0,
    'padded-blocks': [2, { 'switches': 'always' }],
    'quote-props': [2, 'consistent'],
    'quotes': [2, 'single', 'avoid-escape'],
    'id-match': 0,
    'semi-spacing': [2, { 'after': true }],
    'semi': [2, 'always'],
    'sort-vars': 0,
    'keyword-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': 0,
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-return-throw-case': 0,
    'space-unary-ops': 0,
    'spaced-comment': [2, 'always', {
      'line': {
        'markers': ['/'],
        'exceptions': ['-', '+']
      },
      'block': {
        'markers': ['!'],
        'exceptions': ['*']
      }
    }],
    'wrap-regex': 2,
    'arrow-parens': 0,
    'arrow-spacing': 0,
    'constructor-super': 0,
    'generator-star-spacing': 0,
    'no-class-assign': 0,
    'no-const-assign': 0,
    'no-this-before-super': 0,
    'no-var': 0,
    'object-shorthand': 0,
    'prefer-const': 0,
    'prefer-spread': 0,
    'prefer-reflect': 0,
    'require-yield': 0,
    'max-depth': [2, 4],
    'max-len': [2, 200, 1, { 'ignorePattern': 'true' }],
    'max-params': 0,
    'max-statements': 0,
    'no-bitwise': [2, { 'allow': ['~'] }],
    'no-plusplus': 2
  }
};