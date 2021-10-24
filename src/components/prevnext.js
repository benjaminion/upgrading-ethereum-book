import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import "./prevnext.css"

function PrevNextLink(props) {
  if (props.page === null || props.page === undefined) return null

  const f = props.page.node.frontmatter
  var title = f.titles[0]
  if (f.titles[1] !== "") title += " > " + f.titles[1]
  if (f.titles[2] !== "") title += " > " + f.titles[2]

  return(
      <Link to={f.path} title={title}>{props.children}</Link>
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

  // console.log(JSON.stringify(pages, undefined, 2))
  
  const prevPage = pages.filter(p => p.node.frontmatter.sequence === (props.seq - 1))[0]
  const nextPage = pages.filter(p => p.node.frontmatter.sequence === (props.seq + 1))[0]

  return (
      <div className="prevnext">
        <span className="prev">
          <PrevNextLink page={prevPage}>Back</PrevNextLink>
        </span>
        <span className="next">
          <PrevNextLink page={nextPage}>Next</PrevNextLink>
        </span>
      </div>
  )
}

export default PrevNext
