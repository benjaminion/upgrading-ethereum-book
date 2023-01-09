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
import Search from "../components/search"

import "katex/dist/katex.min.css"
import "../css/page.css"

export function Head({ data }) {

  const { mySearchData, site } = data
  const frontmatter = mySearchData.frontmatter

  const indexArray = frontmatter.index

  var pageTitle = site.siteMetadata.title
  if (frontmatter.titles !== null) {
    const titles = frontmatter.titles.filter(x => x !== '')
    const number = (indexArray.length >= 2) ? indexArray.join('.') : ''
    pageTitle += ' | ' + number + ' ' + titles[titles.length - 1]
  }

  return (
    <title>{pageTitle}</title>
  )
}

export default function Template({ data }) {

  const { html, frontmatter } = data.mySearchData
  const indexArray = frontmatter.index
  const path = frontmatter.path

  const pageExtras = path.startsWith('/search')
        ? <Search />
        : <Subsections indexArray={indexArray} />

  return (
      <>
        <Banner path={path} />
        <div id="page">
          <Sidebar index={frontmatter.index} />
          <div id="main-content">
            <PrevNext seq={frontmatter.sequence} />
            <DarkModeToggle />
            <main
               dangerouslySetInnerHTML={{ __html: html }}
            />
            {pageExtras}
            <Footer />
            <PrevNext seq={frontmatter.sequence} />
          </div>
          <PageNavi path={path} />
          <FootnoteTooltips />
          </div>
        <PrintScripts />
      </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mySearchData(frontmatter: { path: { eq: $path } }) {
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
