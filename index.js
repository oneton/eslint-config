module.exports = {
  "extends": [
    "wesbos/typescript"
  ],
  "rules": {
    "no-shadow": 0,
    "no-continue": 0,
    "no-plusplus": 0,
    "react/prop-types": 0,
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unsafe-assignment": 0,
    "max-len": [
      0,
      {
        "code": 120,
        "tabWidth": 2,
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 120,
      },
    ],
  }
}
