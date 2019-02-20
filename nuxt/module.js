/**
 * Register the directive
 */
import path from 'path'
export default function (options) {
	this.addPlugin({
		src: path.resolve(__dirname, 'plugin.js')
	});
}

// Export meta for Nuxt
module.exports.meta = require('../package.json')
