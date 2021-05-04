module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb'],
  plugins:['prettier','react','react-native'],
  rules: {
    'react/prop-types': ['error', { 'ignore': ['navigation', 'children', 'route'] }],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'object-curly-newline': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-param-reassign': 'off',
  }
};
