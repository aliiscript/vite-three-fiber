module.exports = {
    env: { browser: true, es2020: true, amd: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-namespace": "off",
    },
};