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
              titles
              index
            }
          }
        }
      }
    }
  `)

  const pages = data.allMarkdownRemark.edges

  const layout = pages.sort((a, b) => {
    return (a.node.frontmatter.index === null || b.node.frontmatter.index === null) ? -1 : a.node.frontmatter.index.join().localeCompare(b.node.frontmatter.index.join())
  }).reduce((layout, page) => {
    if (page.node.frontmatter.index) {
      const pageIndex = page.node.frontmatter.index
      layout.push({page: page, depth: pageIndex.length - 1, pageIndex: pageIndex.join(".")})
    }
    return layout
  }, [])

 // console.log(JSON.stringify(layout, undefined, 2))
  
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
        {layout.map(info => { return (<Link to={info.page.node.frontmatter.path} activeClassName="index-active"><div className={"index-item index-indent-" + info.depth}>{info.pageIndex} <span>{info.page.node.frontmatter.titles[info.depth]}</span></div></Link>)})}
      </div>
    </nav>
  )
}

export default Sidebar
