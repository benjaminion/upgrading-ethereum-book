import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../css/banner.css"

const Banner = ({path}) => {

  const addBanner = true

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              hide
            }
          }
        }
      }
    }
  `)

  const pages = data.allMarkdownRemark.edges
  const hide = pages.filter(page => page.node.frontmatter.path === path)[0].node.frontmatter.hide

  if (addBanner) {

    if (hide) {

      return (
        <div id="banner">
          <p>This version is old (Bellatrix). The latest book is <a href="/latest/">here</a>.</p>
        </div>  
      )

    } else {

      const newPage = "/latest" + path
      return (
        <div id="banner">
          <p>This version is old (Bellatrix). The latest book is <a href="/latest/">here</a>. An updated page may be <a href={newPage}>here</a>.</p>
        </div>  
      )

    }

  } else {

    return null

  }
}

export default Banner
