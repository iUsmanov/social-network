import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import webpack from 'webpack';

export function buildBabelLoader(isDev: boolean, isTsx?: boolean): webpack.RuleSetRule {
	const babelLoader = {
		test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: [/node_modules/],
		use: {
			loader: 'babel-loader',
			options: {
				cacheDirectory: true,
				presets: ['@babel/preset-env'],
				plugins: [
					isDev && 'react-refresh/babel',
					['@babel/plugin-transform-typescript', { isTsx }],
					'@babel/plugin-transform-runtime',
					isTsx && !isDev && [babelRemovePropsPlugin, { props: ['data-testid'] }],
				].filter(Boolean),
			},
		},
	};

	return babelLoader;
}
