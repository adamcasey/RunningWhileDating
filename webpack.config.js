const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DotenvPlugin = require('webpack-dotenv-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	// un-minify the output of webpack when it runs
	mode: "development",
	// made need to change this to entry: "./src/index.js"
	entry: {
		//home: './src/home.js',
		home: './src/index.js',
	},
	// tells webpack where to output
	output: {
		path: __dirname + '/public/js/',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!postcss-loader!sass-loader"
				}),
			},
			{
		        test: /\.js$/,
		        exclude: /(node_modules|bower_components)/,
		        use: {
			        loader: 'babel-loader',
			        options: {
				        //presets: ['env']
					}
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("../css/style.css"),
		// removing the .env plugin for now until but will use it later for clientID and clientSecret
	    /*new DotenvPlugin({
			sample: './.env.default',
			path: './.env'
	    }),*/
	    new BrowserSyncPlugin({
	        host: 'localhost',
	        port: 3001,
	        proxy: 'http://localhost:3000/',
	        files: []
		}),
	],
	watch: true,
	// change this to devtool: 'none' if you want to get rid of all the 'eval' stuff in the code webpack outputs
	devtool: 'source-map'
};
