import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import NestedList from "./nestedlist"

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

  const items = headings.map(h => {return ({
    level: h.depth,
    index: h.id,
    title: h.value,
    page: "#" + h.id,
    hide: false
  })})
  
  return (<NestedList items={items} level={1} idx={0} />)
}

export default PageNavi
