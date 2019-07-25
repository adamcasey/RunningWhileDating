
const path = require('path');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
		filename: '[name].bundle.js',
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	module: {
		rules: [
			{
			/*
			test: /\.scss$/,
				//use: [MiniCssExtractPlugin.loader, 'css-loader'],
				use: [
				"style-loader", //3. Inject styles into DOM
				"css-loader", //2. Turns css into common js
				"sass-loader" //1. Turns sass into css
				]
			*/
			test: /\.css$/,
			use: [
				{loader: 'style-loader'},
				{loader: 'css-loader'}
			]
			},
			{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
				}
			}
		}
			],
		},
		plugins: [
		// removing the .env plugin for now until but will use it later for clientID and clientSecret
	    /*new DotenvPlugin({
			sample: './.env.default',
			path: './.env'
		}),*/
		new MiniCssExtractPlugin({
			filename: '[name].css',
			ignoreOrder: true,
		}),
	    // new HtmlWebpackPlugin({
	    // 	title: 'Custom HTML page',
	    // 	template: './src/index.html'
	    // }),
	    // BrowserSync implementation 
	    new BrowserSyncPlugin({
	    	host: 'localhost',
	    	port: 3001,
	    	server: { baseDir: ['src']},
	        //proxy: 'http://localhost:3001/',
	        // tell Webpack to watch multiple files
	        files: ['./src/index.html', './src/app/app.js', './main.scss', './main.css']
	    }),
	    ],
	    watch: true,
	// change this to devtool: 'none' if you want to get rid of all the 'eval' stuff in the code webpack outputs
	devtool: 'source-map'
};
