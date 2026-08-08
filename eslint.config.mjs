const commonRules = {
  "no-undef": "error",
  "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
};

export default [
  {
    ignores: ["node_modules/**", "public/js/3rdParty/**", "public/js/example.js", "results/**"],
  },
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        console: "readonly",
        module: "readonly",
        process: "readonly",
        require: "readonly",
      },
    },
    rules: commonRules,
  },
  {
    files: ["public/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        document: "readonly",
        fetch: "readonly",
        localStorage: "readonly",
        window: "readonly",
      },
    },
    rules: commonRules,
  },
];
