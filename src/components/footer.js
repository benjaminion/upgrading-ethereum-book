import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./footer.css"

const Footer = () => {

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          gitHash
          gitUrl
          date
          licenceUrl
          licence
        }
      }
    }
  `)

  const meta = data.site.siteMetadata

  return (
    <footer>
      <p>Created by {meta.author}. Licensed under <a href={meta.licenceUrl} target="_blank" rel="external noreferrer">{meta.licence}</a>. Published <span class="date">{meta.date}</span>. Commit <a className="githash" href={meta.gitUrl} target="_blank" rel="external noreferrer">{meta.gitHash}</a>.</p>
    </footer>
  )
}

export default Footer
