/// <reference types="vitest" />
/// <reference types="vite/client" />
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => ({
	resolve: {
		alias: {
			'@api': path.resolve(__dirname, './src/api'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@helpers': path.resolve(__dirname, './src/helpers'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@providers': path.resolve(__dirname, './src/providers'),
			'@store': path.resolve(__dirname, './src/store'),
			'@temp': path.resolve(__dirname, './src/temp'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@': path.resolve(__dirname, './src')
		}
	},
	plugins: [
		svgr({
			include: '**/*.svg'
		}),
		tsconfigPaths()
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['setupTest.ts'],
		coverage: {
			provider: 'istanbul'
		}
	}
}))
