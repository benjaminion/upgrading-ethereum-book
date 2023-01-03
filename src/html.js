import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"

export default function HTML(props) {
  return (
    <html lang="en-GB" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:image" content="https://eth2book.info/f/android-icon-192x192.png" />
        <meta property="og:title" content="Upgrading Ethereum" />
        <meta property="og:description" content="A technical handbook on Ethereum's move to proof of stake and beyond." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="eth2book.info" />
        <meta name="twitter:creator" content="@benjaminion_xyz" />
        <meta name="twitter:image" content="https://eth2book.info/f/android-icon-192x192.png" />
        <meta name="description" content="A technical handbook on Ethereum's move to proof of stake and beyond." />
        <link rel="apple-touch-icon" sizes="57x57" href="https://eth2book.info/f/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="https://eth2book.info/f/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="https://eth2book.info/f/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="https://eth2book.info/f/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="https://eth2book.info/f/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="https://eth2book.info/f/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="https://eth2book.info/f/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://eth2book.info/f/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://eth2book.info/f/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="https://eth2book.info/f/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://eth2book.info/f/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="https://eth2book.info/f/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://eth2book.info/f/favicon-16x16.png" />
        <link rel="manifest" href="https://eth2book.info/f/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="https://eth2book.info/f/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Dark mode stuff */}
        <link rel="stylesheet" href={withPrefix('/dark_230103.css')} media="(prefers-color-scheme: dark)" />
        <link rel="stylesheet" href={withPrefix('/light_230103.css')} media="(prefers-color-scheme: light)" />
        <script type="module" src="https://eth2book.info/inc/dark-mode-toggle.js" />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
