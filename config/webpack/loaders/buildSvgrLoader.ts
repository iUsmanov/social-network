import webpack from 'webpack';

export function buildSvgrLoader(): webpack.RuleSetRule {
	const svgrLoader = {
		test: /\.svg$/,
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: 'convertColors',
								params: {
									currentColor: true,
								},
							},
						],
					},
				},
			},
		],
		exclude: /node_modules/,
	};

	return svgrLoader;
}
