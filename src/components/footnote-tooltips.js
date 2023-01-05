import { Component } from 'react'

import '../css/footnote-tooltips.css'

const stripIds = (node) => {
  if (node.removeAttribute !== undefined) {
    node.removeAttribute('id')
  }
  if (node.children !== undefined) {
    Array.from(node.children).forEach((node) => stripIds(node))
  }
}

// Modify the page to duplicate any footnotes into tooltips.
class FootnoteTooltips extends Component {

  componentDidMount() {
    const fns = document.body.querySelectorAll('.footnote-ref')
    for (let i = 0; i < fns.length; i++) {

      // For finding the footnote contents
      const fnSelector = fns[i].attributes.href.textContent

      // Append new span elements to all footnote links to hold the tooltip
      if (fns[i].querySelector('span.fn-span') === null) {

        const footnote = document.body.querySelector(fnSelector)

        // Remove any ID attributes from the copied HTML to preserve uniqueness
        stripIds(footnote)

        const fnSpan = document.createElement('span')
        fnSpan.className = 'fn-span'
        fnSpan.innerHTML = footnote.innerHTML
        fns[i].parentElement.append(fnSpan)
      }
    }
  }

  render() {
    return null
  }

}

export default FootnoteTooltips
