module.exports = {
	entry: "./src/main.js",
	output: {
		path: "./",
		filename: "script.js"
	},
	devServer: {
		inline: true,
		port: 1337
	},
	module: {
		loaders: [
		 	{
		 		test: /\.js$/,
		 		exclude: /node_modules/,
		 		loader: "babel",
		 		query: {
		 			presets: ["es2015", "react"]
		 		}
		 	}
	 	]
	}
}