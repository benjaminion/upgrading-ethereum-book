require("prismjs/themes/prism-tomorrow.css")

exports.onClientEntry = () => {

  /*
   * Handle opening of <details> elements when printing
   */

  // Open closed details elements for printing
  window.addEventListener('beforeprint', () => {
    const allDetails = document.body.querySelectorAll('details')
    for (let i = 0; i < allDetails.length; i++) {
      if (allDetails[i].open) {
        allDetails[i].dataset.open = '1'
      } else {
        allDetails[i].setAttribute('open', '')
      }
    }
  })

  // After printing, close details elements not opened before
  window.addEventListener('afterprint', () => {
    const allDetails = document.body.querySelectorAll('details')
    for (let i = 0; i < allDetails.length; i++) {
      if (allDetails[i].dataset.open) {
        allDetails[i].dataset.open = ''
      } else {
        allDetails[i].removeAttribute('open')
      }
    }
  })
}

/*
  Awful hack to (partially) work around a pathological issue in Chrome whereby
  a link to an anchor near the bottom of the page (such as a footnote) results
  in most of the viewport being scrolled off the screen. This is only
  recoverable if we keep a scrollbar on the page, which leads to other issues.

  Anyway, The following detects the issue on initial page load and fixes
  it. But all bets are off for any further loads or navigation.

  Example test link that shows the behaviour if this "fix" is turned off:
    http://eth2book.info/latest/part2/incentives/rewards/#fn-2

  I've also brutalised gatsby-remark-autolink-headers (see
  `patches/gatsby-remark-autolink-headers+*`) to remove its scrolling
  functionality as that just makes things worse.

  The issue does not occur on FireFox. If anyone knows how to fix it, please
  save my sanity by letting me know. I suspect it's down to something very
  simple in CSS.
*/

exports.shouldUpdateScroll = () => {
  if (window.pageYOffset !== 0) {
    document.querySelector('html').scroll(0, -window.pageYOffset)
    return false
  }
  return true
}
