const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');	

module.exports = {
	entry: {
		main: "./src/main.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							additionalData: `@import "/src/styles/globalStyles.scss";`,
							sassOptions: {
								data: '@import "/src/styles/globalStyles.scss";',
								webpackSucks: "true"
							}
						}
					}
				]
			},
			{
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
				loader: "file-loader",
				options: {
					name: "[name][contenthash:8].[ext]",
					outputPath: "./src/assets/fonts",
          esModule: false
				}
			},
			{
        test: /\.(png|jpe?g|gif|webm|mp4)$/,
        loader: "file-loader",
        options: {
					name: "[name][contenthash:8].[ext]",
          outputPath: "./src/assets/images",
          esModule: false
				}
			},
			{
				test: /\.svg$/,
				loader: "file-loader",
				options: {
					name: "[name][contenthash:8].[ext]",
					outputPath: "./src/assets/icons",
					esModule: false
				}
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html")
		})
	]
}