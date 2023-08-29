module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
  },
};
