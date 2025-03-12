import { type Config } from 'prettier'

export const prettierConfig: Config = {
	semi: false,
	singleQuote: true,
	trailingComma: 'none',
	tabWidth: 4,
	endOfLine: 'auto',
	printWidth: 120,
	plugins: ['prettier-plugin-multiline-arrays'],
	multilineArraysWrapThreshold: 1,
	useTabs: true
}

const defineConfig = (): Config => {
	return prettierConfig
}

export default defineConfig
