import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/page"
import Sidebar from "../components/sidebar"
import Subsections from "../components/subsections"
import PrevNext from "../components/prevnext"
import Footer from "../components/footer"
import PageNavi from "../components/pagenavi"

import "katex/dist/katex.min.css"

export function Head({ data }) {

  const { markdownRemark, site } = data
  const { frontmatter } = markdownRemark

  const indexArray = frontmatter.path !== "/contents"
        ? frontmatter.index
        : []

  var pageTitle = site.siteMetadata.title
  if (frontmatter.titles !== null) {
    const titles = frontmatter.titles.filter(x => x !== "")
    const number = (indexArray.length >= 2) ? indexArray.join('.') : ''
    pageTitle += ' | ' + number + ' ' + titles[titles.length - 1]
  }

  return (
    <title>{pageTitle}</title>
  )
}

export default function Template({ data }) {

  const { html, frontmatter } = data.markdownRemark

  //console.log(JSON.stringify(markdownRemark, undefined, 2))

  const indexArray = frontmatter.path !== "/contents"
        ? frontmatter.index
        : []

  return (
    <Layout>
      <Sidebar index={frontmatter.index} />
      <div className="main-content">
        <PrevNext seq={frontmatter.sequence} />
        <div className="container">
          <div className="section">
            <div
              className="section-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Subsections indexArray={indexArray} />
          </div>
        </div>
        <Footer />
        <PrevNext seq={frontmatter.sequence} />
      </div>
      <div className="page-navi">
        <PageNavi path={frontmatter.path} />
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
        titles
      }
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
