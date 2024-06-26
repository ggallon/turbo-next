/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  rules: {
    "import/no-default-export": "off",
  },
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
};
