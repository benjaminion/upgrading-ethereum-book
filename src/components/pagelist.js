import React from "react"
import NestedList from "./nestedlist"

// Format pages as a list according to their index data.
// Depth is the length of prefix to ignore
// We assume the pages are given to us in sorted order
const PageList = ({pages, depth}) => {

  const filteredPages = pages.filter(p => p.node.frontmatter.index !== null)
  if (filteredPages.length === 0) return null

  // Make a flat array of list level and the list info
  const layout = filteredPages.map(p => {return ({
      level: p.node.frontmatter.index.length,
      index: p.node.frontmatter.index.join("."),
      title: p.node.frontmatter.titles[p.node.frontmatter.index.length - 1],
      page: p.node.frontmatter.path,
      hide: p.node.frontmatter.hide === true
    })})

  return (<NestedList items={layout} level={depth + 1} idx={0} />)
}

export default PageList
