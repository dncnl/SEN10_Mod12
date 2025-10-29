import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly"
      }
    },
    rules: {
      semi: ["error", "always"], // Require semicolons
      quotes: ["error", "double"], // Use double quotes
      "no-unused-vars": "warn"
    }
  }
];