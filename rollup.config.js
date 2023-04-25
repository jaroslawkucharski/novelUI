import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

import packageJson from './package.json'

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
	plugins: [commonjs(), typescript()]
}
