import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import PageList from "./pagelist"
import "./sidebar.css"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: {fields: [frontmatter___sequence]}
        filter: {frontmatter: {index: {ne: null}}}
    ) {
        edges {
          node {
            frontmatter {
              hide
              path
              titles
              index
              sequence
            }
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const pages = data.allMarkdownRemark.edges

  // List only parts and chapters in the sidebar
  const filteredPages = pages.filter(p => p.node.frontmatter.index.length <= 2)

  // console.log(JSON.stringify(filteredPages, undefined, 2))
  
  return (
    <nav className="sidebar">
      <div className="sidebar-title">
        <Link
          to="/"
        >
          {data.site.siteMetadata.title}
        </Link>
      </div>
      <div id="index">
        <PageList pages={filteredPages} depth={0} />
      </div>
    </nav>
  )
}

export default Sidebar
