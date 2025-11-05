import js from "@eslint/js";

export default [
  {
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        window: true,
        document: true,
        alert: true,
        console: true,
        setTimeout: true,
        setInterval: true,
        clearInterval: true,
      },
    },
  },
  // ✅ Jest-specific globals for test files
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        describe: true,
        test: true,
        expect: true,
        jest: true,
        beforeAll: true,
        global: true,
      },
    },
  },
];
