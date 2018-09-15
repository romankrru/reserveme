const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
	devServer: {
		historyApiFallback: true,
		open: false,
		port: 3000,
		proxy: {
			'/api': 'http://localhost:8080',
		},
	},

	entry: './src/client/index.js',

	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							localIdentName: '[name]__[local]__[hash:base64:5]',
							modules: true,
						},
					},
				],
			},
			{
				loader: 'url-loader?limit=100000',
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
			},
		],
	},

	output: {
		chunkFilename: '[name].chunk.js',
		filename: '[name].js',
		path: path.resolve(__dirname, '..', 'dist'),
		publicPath: '/',
	},

	plugins: [
		new CleanWebpackPlugin([outputDirectory]),

		new HtmlWebpackPlugin({
			favicon: './public/favicon.ico',
			template: './public/index.html',
		}),
	],
};
