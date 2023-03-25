import { Component } from 'react'

import '../css/footnote-tooltips.css'

// Modify the page to duplicate any footnotes into tooltips.
class FootnoteTooltips extends Component {

  componentDidMount() {

    document.body.querySelectorAll('.footnote-ref').forEach( (fn) => {

      if (fn.parentElement.querySelector('span.fn-span') === null) {

        // Find the footnote
        const toolTip = document.body.querySelector(fn.attributes.href.textContent)

        // Create a new span element to hold the tooltip
        const fnSpan = document.createElement('span')
        fnSpan.className = 'fn-span'
        for (let i = 0; i < toolTip.childNodes.length; i++) {
          fnSpan.appendChild(toolTip.childNodes[i].cloneNode(true))
        }

        // Remove any backlinks (there should be exactly one)
        const backlinks = fnSpan.getElementsByClassName('footnote-backref')
        for (let i = 0; i < backlinks.length; i++) {
          backlinks[i].parentElement.removeChild(backlinks[i])
        }

        // Ensure the tooltip doesn't overflow the main content area
        fnSpan.addEventListener("transitionstart", (event) => {
          const span = event.target
          const padding = 16;
          const mainRect = document.getElementById('main-content').getBoundingClientRect()
          const fnRect = fn.getBoundingClientRect()
          const spanRect = span.getBoundingClientRect()
          const spanWidth = spanRect.right - spanRect.left
          var left = (fnRect.right + fnRect.left - spanWidth) / 2
          left = Math.max(left, mainRect.left + padding)
          left = Math.min(left, mainRect.right - spanWidth - padding)
          const zeroPos = fnRect.right
          span.style.left=`${left - zeroPos}px`
        })

        fn.parentElement.append(fnSpan)

      }
    })
  }

  render() {
    return null
  }

}

export default FootnoteTooltips
