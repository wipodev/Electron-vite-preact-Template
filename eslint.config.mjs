import eslintConfig from "@electron-toolkit/eslint-config";
import eslintConfigPrettier from "@electron-toolkit/eslint-config-prettier";
import preactPlugin from "eslint-plugin-preact";

export default [
	{
		ignores: ["**/node_modules", "**/dist", "**/out"],
	},
	eslintConfig,
	eslintConfigPrettier,
	{
		plugins: {
			preact: preactPlugin,
		},
		rules: {
			"react/no-unknown-property": "off",
			quotes: ["error", "double"],
			"no-unused-vars": "warn",
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
];
