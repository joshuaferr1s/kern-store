module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  'rules': {
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],
    'consistent-return': 1,
    'no-param-reassign': 1,
    'no-return-assign': 1,
    'no-return-await': 1,
    'no-unmodified-loop-condition': 1,
    'no-unused-expressions': 1,
    'comma-dangle': [1, 'always-multiline'],
    'indent': [2, 2],
    'no-trailing-spaces': 1,
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'react/prop-types': 0,
  },
};