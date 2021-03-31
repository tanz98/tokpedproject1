import NextHead from 'next/head'
import { string } from 'prop-types'
import { injectGlobal } from '@emotion/css'

const defaultTitle = 'Pokemon World Catch'
const defaultDescription = 'Lets Go Catch Pokemon'
const defaultKeyword = ''
injectGlobal`
	html {
		text-rendering: optimizeLegibility !important;
		-webkit-font-smoothing: antialiased !important;
	}
	body {
		margin: 0px;
	}
`

const Head = (props) => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title || defaultTitle} - Site for catch pokemon</title>
		<meta name="description" content={props.description || props.title ? props.title + ' - ' + defaultDescription : defaultDescription} />
		<meta name="keywords" content={props.keywords || defaultKeyword} />
		<meta name="author" content="TM" />
		<meta name="HandheldFriendly" content="true"/>
		<meta name="language" content="ID" />
		<meta name="revisit-after" content="7" />
		<meta name="webcrawlers" content="all" />
		<meta name="rating" content="general" />
		<meta name="spiders" content="all" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=0" />
		<meta name="msapplication-tap-highlight" content="no" />
		<meta name="mobile-web-app-capable" content="yes" />
		<meta name="application-name" content="Pokemon World Catch" />
		<meta name="theme-color" content="#ffffff" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
		<meta name="apple-mobile-web-app-title" content="Pokemon World Catch" />
		<meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />
		<meta property="og:title" content={props.title || defaultTitle} />
		<meta property="og:description" content={props.description || props.title ? props.title + ' - ' + defaultDescription : defaultDescription} />
		<meta property="og:site_name" content="Pokemon World Catch" />
				
		<link rel="apple-touch-icon" href="/static/logo-129x129.png" />
		<link rel="apple-touch-icon" sizes="129x129" href="/static/logo-129x129.png" />
		<link rel="apple-touch-icon" sizes="114x114" href="/static/logo-114x114.png" />
		<link rel="apple-touch-icon" sizes="120x120" href="/static/logo-120x120.png" />		
		<link rel="apple-touch-icon" sizes="152x152" href="/static/logo-152x152.png" />
		<link rel="shortcut icon" href="/static/favicon.svg" />
		{/* <link rel="manifest" href="/manifest.json" /> */}
		
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" Crossorigin="anonymous" />
	</NextHead>
)

Head.propTypes = {
	title: string,
	description: string,
	keyword: string
}

export default Head