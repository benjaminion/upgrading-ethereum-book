import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import PageList from "./pagelist"
import "./sidebar.css"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              titles
              index
            }
          }
        }
      }
    }
  `)

  const pages = data.allMarkdownRemark.edges

  return (
    <nav className="sidebar">
      <div className="sidebar-title">
        <Link
          to="/"
        >
          Ethereum 2.0 Explained
        </Link>
      </div>
      <div id="index">
      <PageList pages={pages} depth={0} />
      </div>
    </nav>
  )
}

export default Sidebar
