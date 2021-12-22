import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./footer.css"

const Footer = () => {

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          copyright
          gitHash
          gitUrl
          licenceUrl
          licence
        }
      }
    }
  `)

  const meta = data.site.siteMetadata

  return (
    <footer>
      <p>Created by {meta.author}. {meta.copyright}. Licensed under <a href={meta.licenceUrl} target="_blank" rel="external noopener">{meta.licence}</a>. Commit <a className="githash" href={meta.gitUrl} target="_blank" rel="external noopener">{meta.gitHash}</a>.</p>
    </footer>
  )
}

export default Footer
