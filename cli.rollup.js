const { _config__rollup__node } = require('@ctx-core/rollup/lib.js')
module.exports = _config__rollup__node({
	input: `${__dirname}/cli.mjs`,
	output: {
		file: 'private/dist/quovo-cli.js',
		banner: '#!/usr/bin/env node',
		sourcemap: true
	},
})