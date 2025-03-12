import { defineConfig } from 'tsup'

// https://tsup.egoist.dev/#using-custom-configuration
export default defineConfig({
	entry: ['./src/index.ts'],
	format: ['esm'],
	splitting: false,
	dts: true,
	clean: true,
	minify: true
})
