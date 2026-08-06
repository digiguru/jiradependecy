export default [
  {
    ignores: ["node_modules/**", "public/js/3rdParty/**", "public/js/example.js", "results/**"],
  },
  {
    files: ["src/**/*.js", "public/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        console: "readonly",
        document: "readonly",
        fetch: "readonly",
        localStorage: "readonly",
        module: "readonly",
        process: "readonly",
        require: "readonly",
        window: "readonly",
      },
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    },
  },
];
