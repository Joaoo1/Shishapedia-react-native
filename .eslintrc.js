module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb'],
  plugins:['prettier',"react","react-native"],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    'object-curly-newline': 'off',
    "react/prop-types": ["error", { "ignore": ["navigation", "children", "route"] }],
    "react/forbid-prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react-hooks/exhaustive-deps": "off",
    'no-param-reassign': 'off',
  }
};
