import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/page"
import Sidebar from "../components/sidebar"

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { html } = markdownRemark

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
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`
