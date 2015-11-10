var path 	= require('path'),
	webpack = require('webpack');

console.log('__dirname', __dirname);

module.exports = {

	entry: './index.js',

	output: { path: path.resolve(__dirname + '/js'), file: 'bundle.js' },
	
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [ 'es2015', 'react' ]
				}
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.json', '.coffee', '.es6']
	}

};