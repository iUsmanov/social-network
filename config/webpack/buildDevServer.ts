import { BuildOptions } from './types/config';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): WebpackDevServerConfiguration {
	return {
		historyApiFallback: true,
		hot: true,
		port: options.port,
		open: true,
	};
}
