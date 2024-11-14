module.exports = {
	basePath: '/profile', // nama repo lo di GitHub
  	output: 'export', // ini biar Next.js nge-build ke file static
	poweredByHeader: false,
	assetPrefix: process.env.ASSET_HOST || '',
	productionBrowserSourceMaps: process.env.NODE_ENV === 'production',
	webpack(config) {
		config.module.rules.push({
			test: /\.svg?$/,
			oneOf: [
				{
					use: [
						{
							loader: '@svgr/webpack',
							options: {
								prettier: false,
								svgo: true,
								svgoConfig: {
									plugins: [{ removeViewBox: false }],
								},
								titleProp: true,
							},
						},
					],
					issuer: {
						and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
					},
				},
			],
		});

		return config;
	},
	publicRuntimeConfig: {},
	images: {
		domains: ['dev-to-uploads.s3.amazonaws.com', 'res.cloudinary.com'],
	},
};
