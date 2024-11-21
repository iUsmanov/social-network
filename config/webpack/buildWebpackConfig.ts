import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function webpackConfiguration(options: BuildOptions): webpack.Configuration {
	return {
		entry: options.buildPaths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: options.buildPaths.build,
			clean: true,
			publicPath: '',
		},
		mode: options.mode,
		devtool: options.isDev ? 'eval-cheap-module-source-map' : undefined,
		devServer: options.isDev ? buildDevServer(options) : undefined,
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		plugins: buildPlugins(options),
	};
}
