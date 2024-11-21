import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [options.buildPaths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {
			'@': options.buildPaths.src,
		},
	};
}
