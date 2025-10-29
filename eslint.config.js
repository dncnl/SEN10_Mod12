import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      semi: ["error", "always"], // Require semicolons
      quotes: ["error", "double"], // Use double quotes
      "no-unused-vars": "warn"
    }
  }
];