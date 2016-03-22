'use strict'

module.exports = {
  rules: {
    'block-spacing': [2, 'always'],
    'comma-style': [2, 'last'],
    'curly': 2,
    'eqeqeq': 2,
    'indent': [2, 2, { SwitchCase: 1 }],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'linebreak-style': [2, 'unix'],
    'max-depth': [2, 3],
    'no-eval': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'comma-spacing': [2, {'before': false, 'after': true}],
    'no-trailing-spaces': 2,
    'no-undefined': 2,
    'no-unused-vars': [2, { 'args': 'none' }],
    'quotes': [2, 'single'],
    'semi': [2, 'never'],
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never']
  }
}
