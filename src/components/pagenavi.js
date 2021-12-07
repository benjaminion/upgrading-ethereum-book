import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NestedList from "./nestedlist"

import "./pagenavi.css"

const PageNavi = ({path}) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            headings {
              value
              depth
              id
            }
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  const pages = data.allMarkdownRemark.edges
  const headings = pages.filter(page => page.node.frontmatter.path === path)[0].node.headings

  if (headings.length === 0) {
    return null
  }
  
  // console.log(JSON.stringify(thisPage.node.headings, undefined, 2))

  const items = headings.filter(h => h.depth >= 2).map(h => {return ({
    level: h.depth,
    label: "",
    title: h.value,
    link: "#" + h.id,
    hide: false
  })})
  
  return (<NestedList items={items} level={2} idx={0} />)
}

export default PageNavi
