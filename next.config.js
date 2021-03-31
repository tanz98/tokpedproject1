'use strict'

const next = require('next')
const { withPlugins } = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')
const withSass = require('@zeit/next-sass')

const nextWithCssConfig = {
	webpack: function (config) {
		config.module.rules.push({
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
						name: '[name].[ext]'
					}
				}
		})
		return config
	}
}

const nextWithOfflineConfig = {
	dontAutoRegisterSw: false,
	devSwSrc: './next/.next/static/one/js/service-worker.js',
	workboxOpts: {
		swDest: './next/.next/service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /^https?.*/,
				handler: 'networkFirst',
				options: {
					cacheName: 'https-calls',
					networkTimeoutSeconds: 15,
					expiration: {
						maxEntries: 150,
						maxAgeSeconds: 1 * 24 * 60 * 60, // 1 day
					},
					cacheableResponse: {
						statuses: [0, 200],
					},
				},
			},
		],
		debug: false,
	},
}

const nextWithSass = {
	webpack: function (config) {
		config.module.rules.push({
				test: /\.(css|scss)/,
				loader: 'emit-file-loader',
				options: {
					name: 'dist/[path][name].[ext]'
				}
			},{
				test: /\.css$/,
				loader: 'babel-loader!raw-loader'
			},{
				test: /\.scss$/,
				loader: 'babel-loader!raw-loader!sass-loader'
		})
		return config
	}
}

module.exports = withPlugins([
	[withCSS({ nextWithCssConfig })],
	[withOffline, { nextWithOfflineConfig }],
	[withSass, { nextWithSass }]
])