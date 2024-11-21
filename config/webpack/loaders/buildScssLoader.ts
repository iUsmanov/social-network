import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildScssLoader(isDev: boolean): webpack.RuleSetRule {
	const scssLoader = {
		test: /\.s[ac]ss$/i,
		exclude: /node_modules/,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resourcePath: string) => resourcePath.endsWith('.module.scss'),
						localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	};

	return scssLoader;
}
