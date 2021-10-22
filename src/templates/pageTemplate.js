import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/page"
import Sidebar from "../components/sidebar"
import Subsections from "../components/subsections"

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { html } = markdownRemark

  //console.log(JSON.stringify(markdownRemark, undefined, 2))

  const index_array = markdownRemark.frontmatter.path !== "/contents"
        ? markdownRemark.frontmatter.index
        : []

  return (
    <Layout>
      <Sidebar />
      <div className="main-content">
        <div className="container">
          <div className="section">
            <div
              className="section-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Subsections indexArray={index_array} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        index
        path
      }
      html
    }
  }
`
