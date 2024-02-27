module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  // plugins: ["react-refresh", "import"],
  plugins: ["simple-import-sort", "import"],
  rules: {
    // "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "@typescript-eslint/no-explicit-any": "off",
    // "no-unused-vars": "error",
    // "@typescript-eslint/no-unused-vars": "error",
    "no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars": ["error", { "args": "none" }] // 或者选择适当的选项以忽略类型声明中的参数
    "import/no-unused-modules": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
}
