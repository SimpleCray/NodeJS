module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": 0,
    "max-len": [
      "error",
      {
        code: 150,
        tabWidth: 2,
        ignoreUrls: true,
      },
    ],
    camelcase: 0,
    "no-console": 0,
    "no-useless-catch": 0,
    "no-unused-vars": 0,
    "no-await-in-loop": 0,
    "no-plusplus": 0,
    "consistent-return": 0,
    "operator-linebreak": 0,
    radix: 0,
    "no-restricted-syntax": 0,
    "no-else-return": 0,
    "no-case-declarations": 0,
    "import/no-extraneous-dependencies": 0,
    "no-nested-ternary": 0,
  },
};
