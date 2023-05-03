import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'

import packageJson from './package.json' assert { type: 'json' }

export default {
	input: 'src/index.ts',
	output: [
		{
			file: packageJson.main,
			format: 'umd',
			name: 'novelUI',
			exports: 'named',
			sourcemap: true,
			globals: {
				react: 'React'
			}
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true
		}
	],
	plugins: [
		commonjs(),
		typescript(),
		url({
			include: ['**/*.woff', '**/*.woff2']
		})
	]
}
