import js from "@eslint/js";

export default [
  {
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...js.environments.browser.globals, // ✅ enables alert, window, etc.
      },
    },
  },
];
