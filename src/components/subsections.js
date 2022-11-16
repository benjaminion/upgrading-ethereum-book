import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PageList from "./pagelist"
import "../css/subsections.css"

// Format subsections of the page with index indexArray as a nested list
const Subsections = ({indexArray}) => {

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: {frontmatter: {sequence: ASC}}
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
    }
  `)

  // Only add the auto index for Parts, not any deeper structure
  if (indexArray === null || indexArray.length > 1) return null
  
  // Find pages that are subsections of the page we are on
  const pages = data.allMarkdownRemark.edges
  const indexFilterString = indexArray.length === 0 ? "" : indexArray.join() + ","
  const filteredPages = pages.filter(p => p.node.frontmatter.index.join().startsWith(indexFilterString))

  if (filteredPages.length > 0) {
    return (
      <div className="subsection-list">
        <PageList pages={filteredPages} depth={indexArray.length} />
      </div>
    )
  } else {
    return null
  }
}

export default Subsections
