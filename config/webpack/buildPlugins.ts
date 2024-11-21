import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins: webpack.WebpackPluginInstance[] = [
		new HtmlWebpackPlugin({
			template: options.buildPaths.html,
		}),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(options.isDev),
			__API__: JSON.stringify(options.apiURL),
			__ENVIRON__: JSON.stringify(options.environ),
		}),
	].filter(Boolean);

	if (options.analyze) {
		// options.analyze &&
		plugins.push(
			new BundleAnalyzerPlugin({
				openAnalyzer: true,
			})
		);
	}

	if (!options.isDev) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			})
			// new CopyPlugin({
			// 	patterns: [{ from: options.buildPaths.locales, to: options.buildPaths.buildLocales }],
			// })
		);
	}

	if (options.isDev) {
		plugins.push(
			new ReactRefreshWebpackPlugin(),
			new CircularDependencyPlugin({
				exclude: /node_modules/,
				failOnError: true,
			}),
			new ForkTsCheckerWebpackPlugin({
				typescript: {
					diagnosticOptions: {
						semantic: true,
						syntactic: true,
					},
					mode: 'write-references',
				},
			})
		);
	}

	return plugins;
}
