import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PageList from "./pagelist"
import "./subsection.css"

// Format subsections of the page with index indexArray as a nested list
const Subsections = ({indexArray}) => {

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              hide
              path
              titles
              index
            }
          }
        }
      }
    }
  `)

  if (indexArray === null) return null
  
  // Find pages that are subsections of the page we are on
  const pages = data.allMarkdownRemark.edges

  const indexFilterString = indexArray.length === 0 ? "" : indexArray.join() + ","
  const filteredPages = pages.filter(p => p.node.frontmatter.index !== null && p.node.frontmatter.index.join().startsWith(indexFilterString))

  if (filteredPages.length > 0) {
    return (
      <div className="subsection-list">
        <h3>Subsections</h3>
        <PageList pages={filteredPages} depth={indexArray.length} />
        </div>
    )
  } else {
    return null
  }
}

export default Subsections
