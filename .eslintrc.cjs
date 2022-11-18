module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "@vue/prettier"
  ],
  overrides: [],
  // "parser": "@typescript-eslint/parser",
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser" // 解析.ts文件
  },
  plugins: ["vue", "@typescript-eslint", "eslint-plugin-prettier"],
  rules: {
    "vue/multi-word-component-names": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false, // 使用单引号
        semi: false, // 末尾添加分号
        tabWidth: 2,
        trailingComma: "none",
        useTabs: false,
        endOfLine: "auto"
      }
    ]
  }
}
