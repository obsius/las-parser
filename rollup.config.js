import babel from 'rollup-plugin-babel';

export default {
	input: 'src/LasParser.js',
	output: {
		file: 'lib/LasParser.js',
		format: 'cjs'
	},
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
};