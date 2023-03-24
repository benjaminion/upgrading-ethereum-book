import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../css/prevnext.css"

function PrevNextLink(props) {
  if (props.page === null
      || props.page === undefined
      || props.page.node.frontmatter.sequence < 0
     ) return null

  const f = props.page.node.frontmatter
  let title = f.titles.filter(x => x !== "").join(" > ")

  return(
      <Link to={f.path} title={title} rel={props.rel}>{props.children}</Link>
  )
}

const PrevNext = (props) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              titles
              sequence
            }
          }
        }
      }
    }
  `)

  if (props.seq === null) return null
  
  const pages = data.allMarkdownRemark.edges

  const prevPage = pages.filter(p => p.node.frontmatter.sequence === (props.seq - 1))[0]
  const nextPage = pages.filter(p => p.node.frontmatter.sequence === (props.seq + 1))[0]

  return (
      <div className="prevnext">
        <span className="prev">
          <PrevNextLink page={prevPage} rel="prev">Back</PrevNextLink>
        </span>
        <span className="contents">
          <Link to="/contents">Contents</Link>
        </span>
        <span className="next">
          <PrevNextLink page={nextPage} rel="next">Next</PrevNextLink>
        </span>
      </div>
  )
}

export default PrevNext
