module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['./index.js'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
