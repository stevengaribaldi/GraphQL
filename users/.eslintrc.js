module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  extends: [
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:prettier/recommended', // Prettier recommended rules
  ],
  plugins: [
    // '@typescript-eslint', // TypeScript plugin
    'graphql',
    'prettier',
  ],
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        schemaJson: require('./path/to/your/schema.json'),
      },
    ],
    // ... any other TypeScript or JavaScript rules you might want to add
  },
  // ... any other ESLint configuration settings
}
