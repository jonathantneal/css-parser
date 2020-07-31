import * as path from 'path'
import typescript from '@wessberg/rollup-plugin-ts'
import filesize from 'rollup-plugin-filesize'

// https://github.com/rollup/rollup/issues/1089
const onwarn = (warning, rollupWarn) => {
	const ignoredWarnings = [
		{
			ignoredCode: 'CIRCULAR_DEPENDENCY',
			ignoredPath: 'src/tokenizer/algorithms/index.ts',
		},
		{
			ignoredCode: 'CIRCULAR_DEPENDENCY',
			ignoredPath: 'src/tokenizer/definitions/index.ts',
		},
	]
	if (
		!ignoredWarnings.some(
			({ ignoredCode, ignoredPath }) =>
				warning.code === ignoredCode && warning.importer.includes(path.normalize(ignoredPath)),
		)
	) {
		rollupWarn(warning)
	}
}

export default {
	input: 'src/index.ts',
	onwarn,
	output: [
		{
			file: 'dist/index.js',
			format: 'esm',
			strict: true,
			sourcemap: true,
		},
		{
			file: 'dist/index.cjs',
			format: 'cjs',
			strict: true,
			sourcemap: true,
		},
	],
	plugins: [typescript(), filesize({ showBrotliSize: true, theme: 'light' })],
}
