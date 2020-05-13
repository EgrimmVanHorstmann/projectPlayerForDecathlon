module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'kentcdodds',
    'plugin:vue/recommended'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  settings:{
    'import/resolver': {
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js'
      }
    }
  },

  rules: {
    'no-console': 2,
    'no-debugger': 2,
    'arrow-parens': 0,
    'spaced-comment': 0,
    'camelcase': 0,
    'space-before-function-paren': 2,
    'babel/no-unused-expressions': 0,
    'prefer-exponentiation-operator': 0,
    'no-constructor-return': 0,
    'no-dupe-else-if': 0,
    'no-import-assign': 0,
    'no-setter-return': 0,
    'valid-jsdoc': [1, { requireReturn: false, requireParamDescription: false }],
    'key-spacing': [
      0,
      {
        singleLine: {
          beforeColon: false,
          afterColon: true
        },
        multiLine: {
          beforeColon: true,
          afterColon: true,
          align: 'colon'
        }
      }
    ],
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          Property: true,
          VariableDeclarator: true,
          ImportDeclaration: true,
          AssignmentExpression: true
        }
      }
    ],
    'complexity': ['error', { max: 15 }],
    'no-nested-ternary': 2,
    'vue/require-default-prop': 1,
    'vue/no-confusing-v-for-v-if': 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 2,
        multiline: {
          max: 2,
          allowFirstLine: true
        }
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never'
        }
      }
    ]
  }
}
