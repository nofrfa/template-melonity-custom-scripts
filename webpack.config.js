const glob = require("glob");
const path = require("path");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

entry_dict = {};
for(let file of glob.sync('./src/*.ts', {absolute: true})) {
	let name = file.split('\\').pop().split('.')[0];
	entry_dict[name] = file;
}
module.exports = {
	entry: entry_dict,
	devtool: false,
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	optimization: {
		minimize: false
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	// disabling noisy performance hints
	performance: {
		assetFilter: () => false,
	},
	plugins: [new ForkTsCheckerWebpackPlugin()],
	cache: {
		type: "filesystem",
		buildDependencies: {
			config: [__filename],
		},
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, "dist")
	},
};
