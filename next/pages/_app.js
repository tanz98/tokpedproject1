import React from 'react'
import App from 'next/app'
import NextNprogress from 'nextjs-progressbar'

export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx, NextNprogress }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}
	
	render () {
		const { Component, pageProps } = this.props
		return (
			<React.Fragment>
				<NextNprogress height="2" options={{ easing: 'ease', speed: 500 }} />
				<Component {...pageProps} />
			</React.Fragment>
		)
	}
}