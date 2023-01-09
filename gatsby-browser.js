require("prismjs/themes/prism-tomorrow.css")

/*
  Awful hack to (partially) work around a pathological issue in Chrome whereby a link to an
  anchor near the bottom of the page (such as a footnote) results in most of the viewport
  being scrolled off the screen. This is only recoverable if we keep a scrollbar on the page.
  (Which is why the html element has "overflow: auto" set - I'd much rather it didn't.)

  Anyway, The following detects the issue on initial page load and fixes it. But all bets are
  off for any further loads or navigation.

  Example test link that shows the behaviour if this "fix" is turned off:
    http://eth2book.info/latest/part2/incentives/rewards/#fn-2

  I've also brutalised gatsby-remark-autolink-headers (see my-gatsby-remark-autolink-headers)
  to remove its scrolling functionality as that just makes things worse.

  The issue does not occur on FireFox. If anyone knows how to fix it, please save my sanity
  by letting me know. I suspect it's down to something very simple in CSS.
*/

exports.shouldUpdateScroll = () => {
  if (window.pageYOffset !== 0) {
    //console.log("window.pageYOffset = " + window.pageYOffset)
    document.querySelector('html').scroll(0, -window.pageYOffset)
    //console.log("Returning shouldUpdateScroll = false")
    return false
  }
  //console.log("Returning shouldUpdateScroll = true")
  return true
}
