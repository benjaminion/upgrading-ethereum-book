import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/page"
import Sidebar from "../components/sidebar"
import Subsections from "../components/subsections"
import PrevNext from "../components/prevnext"
import Footer from "../components/footer"

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
      <Sidebar index={markdownRemark.frontmatter.index} />
      <div className="main-content">
        <PrevNext seq={markdownRemark.frontmatter.sequence} />
        <div className="container">
          <div className="section">
            <div
              className="section-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Subsections indexArray={index_array} />
          </div>
        </div>
        <Footer />
        <PrevNext seq={markdownRemark.frontmatter.sequence} />
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
        sequence
      }
      html
    }
  }
`
