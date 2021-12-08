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
      <p>Created by {meta.author}. {meta.copyright}. Licensed under <a href={meta.licenceUrl}>{meta.licence}</a>. Commit <a className="githash" href={meta.gitUrl}>{meta.gitHash}</a></p>
    </footer>
  )
}

export default Footer
