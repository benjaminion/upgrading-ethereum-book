import { Component } from 'react'

import "../css/footnote-tooltips.css"

// Modify the page to duplicate any footnotes into tooltips.
class FootnoteTooltips extends Component {

  componentDidMount() {
    const fns = document.body.querySelectorAll('.footnote-ref')
    for (let i = 0; i < fns.length; i++) {

      // For finding the footnote contents
      let fnSelector = fns[i].attributes.href.textContent

      // Append new span elements to all footnote links to hold the tooltip
      if (fns[i].querySelector('span.fn-span') === null) {
        let fnSpan = document.createElement('span')
        fnSpan.className = 'fn-span'
        fnSpan.innerHTML = document.body.querySelector(fnSelector).innerHTML
        fns[i].parentElement.append(fnSpan)
      }
    }
  }

  render() {
    return null
  }

}

export default FootnoteTooltips
