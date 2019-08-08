const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const DotenvPlugin = require('webpack-dotenv-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const nodeExternals = require('webpack-node-externals');

module.exports = {
	//target: 'node',
	//target: 'web',
	//externals: ['express'],
	entry: {
		main: "./src/index.js"
	},
	// everything will be served out of dist when we run the webpack dev server
	devServer: {
		contentBase: "dist"
	},
	node: {
		fs: "empty",
		net: "empty"
	},
	// made need to change this to entry: "./src/index.js"
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: "[id].css",
			ignoreOrder: true,
		}),
	    new HtmlWebpackPlugin({
	     	template: './src/index.html',
	     	filename: "./index.html"
	    }),
	    // BrowserSync implementation 
	    // new BrowserSyncPlugin({
	    // 	host: 'localhost',
	    // 	port: 3001,
	    // 	server: { baseDir: ['src']},
	    //     //proxy: 'http://localhost:3001/',
	    //     // tell Webpack to watch multiple files
	    //     files: ['./src/index.js']
	    // }),
    ],
    watch: true,
	// change this to devtool: 'none' if you want to get rid of all the 'eval' stuff in the code webpack outputs
	devtool: 'source-map'
};