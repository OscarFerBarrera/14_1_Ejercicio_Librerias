module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      files: [
        '.eslintrc.{js,cjs}',
        '**/*.test.js',
        '**/*.spec.js'
      ],
      env: {
        node: true,
        jest: true
      },
      parserOptions: {
        sourceType: 'module'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: 'off',
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off',
    'react/jsx-indent': [2, 2],
    'react/prop-types': 'off',
    'jsx-quotes': [2, 'prefer-single'],
    'react/no-unescaped-entities': 'off'
  }
}
