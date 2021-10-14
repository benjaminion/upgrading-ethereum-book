import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import "./sidebar.css"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              part
              chapter
              section
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
    </nav>
  )
}

export default Sidebar
