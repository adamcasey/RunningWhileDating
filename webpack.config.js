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
				test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader!postcss-loader!sass-loader"]
				// 	//use: ["style-loader","css-loader"] 
				}),
				//use: ["postcss-loader", "style-loader", "css-loader"]
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
		//new ExtractTextPlugin("../public/css/style.css"),
		new ExtractTextPlugin("./main.css"),
		// removing the .env plugin for now until but will use it later for clientID and clientSecret
	    /*new DotenvPlugin({
			sample: './.env.default',
			path: './.env'
	    }),*/
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
