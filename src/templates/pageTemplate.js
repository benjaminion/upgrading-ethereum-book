import React from "react"
import { graphql } from "gatsby"

import Banner from "../components/banner"
import Sidebar from "../components/sidebar"
import Subsections from "../components/subsections"
import PrevNext from "../components/prevnext"
import Footer from "../components/footer"
import PageNavi from "../components/pagenavi"
import FootnoteTooltips from "../components/footnote-tooltips"
import DarkModeToggle from "../components/dark-mode-toggle"
import PrintScripts from "../components/print-scripts"

import "katex/dist/katex.min.css"
import "../css/page.css"

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
      <>
        <Banner path={frontmatter.path} />
        <div id="page">
          <Sidebar index={frontmatter.index} />
          <div id="main-content">
            <PrevNext seq={frontmatter.sequence} />
            <main>
              <div className="section">
                <div
                  className="section-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <Subsections indexArray={indexArray} />
              </div>
            </main>
            <Footer />
            <PrevNext seq={frontmatter.sequence} />
          </div>
          <PageNavi path={frontmatter.path} />
          <FootnoteTooltips />
        </div>
        <DarkModeToggle />
        <PrintScripts />
      </>
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
