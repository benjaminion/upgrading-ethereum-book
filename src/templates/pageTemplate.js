import React from "react"
import { graphql } from "gatsby"
import cheerio from "cheerio"

import "katex/dist/katex.min.css"
import "../css/page.css"

import Banner from "../components/banner"
import Sidebar from "../components/sidebar"
import Subsections from "../components/subsections"
import PrevNext from "../components/prevnext"
import Footer from "../components/footer"
import PageNavi from "../components/pagenavi"
import FootnoteTooltips from "../components/footnote-tooltips"
import Search from "../components/search"

function postProcessHast($) {

  // Remove `align` attributes from <td> and <th> elements - it's obsolete in HTML5
  $('td[align]').removeAttr('align')
  $('th[align]').removeAttr('align')

  // columnspacing="" on <mtable> is not allowed
  $('mtable[columnspacing=""]').removeAttr('columnspacing')

  // Add target="_blank" and rel="external noopener" to external links
  $('a[href^=http]').each(function (i, e) {
    $(e).attr('target', '_blank')
    $(e).attr('rel', 'external noopener')
  })

  return $
}

export function Head({ data }) {

  const { markdownRemark, site } = data
  const frontmatter = markdownRemark.frontmatter
  const metadata = site.siteMetadata

  const indexArray = frontmatter.index

  var pageTitle = metadata.title
  if (frontmatter.titles !== null) {
    const titles = frontmatter.titles.filter(x => x !== '')
    const number = (indexArray.length >= 2) ? indexArray.join('.') : ''
    pageTitle += ' | ' + number + ' ' + titles[titles.length - 1]
  }

  const pageUrl = metadata.hostname + '/' + metadata.version + frontmatter.path
  const canonical = metadata.canonical + (frontmatter.hide ? '/' : frontmatter.path)
  return (
    <>
      <title>{pageTitle}</title>
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:url" content={pageUrl} />
    </>
  )
}

export default function Template({ data }) {

  const html = data.mySearchData.html
  const frontmatter = data.markdownRemark.frontmatter
  const indexArray = frontmatter.index
  const path = frontmatter.path

  const prevNext = <PrevNext seq={frontmatter.sequence} />
  
  const pageExtras = path.startsWith('/search')
        ? <Search />
        : <Subsections indexArray={indexArray} />

  const htmlPostProcessed = postProcessHast(cheerio.load(html, null, false)).html()

    return (
      <React.StrictMode>
        <div id="page">
          <Sidebar index={frontmatter.index} />
          <div id="main-content" className="scrollable">
            <Banner path={path} />
            <div id="padded-content">
              {prevNext}
              <main
                dangerouslySetInnerHTML={{ __html: htmlPostProcessed }}
              />
              {pageExtras}
              <Footer />
              {prevNext}
            </div>
          </div>
          <PageNavi path={path} />
        </div>
        <FootnoteTooltips />
      </React.StrictMode>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mySearchData(frontmatter: { path: { eq: $path } }) {
      html
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        index
        path
        sequence
        titles
        hide
      }
    }
    site {
      siteMetadata {
        title
        hostname
        version
        canonical
      }
    }
  }
`
