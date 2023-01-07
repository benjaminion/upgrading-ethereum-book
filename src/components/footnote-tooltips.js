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

    document.body.querySelectorAll('.footnote-ref').forEach( (fn) => {

      if (fn.querySelector('span.fn-span') === null) {

        // Find and clone the footnote
        const toolTip = document.body.querySelector(fn.attributes.href.textContent).cloneNode(true)

        // Avoid introducing duplicate ids into our page
        stripIds(toolTip)

        // TODO: remove the backlink: a.footnote-backref

        // Append a new span element to the footnote link to hold the tooltip
        const fnSpan = document.createElement('span')
        fnSpan.className = 'fn-span'
        fnSpan.appendChild(toolTip)
        fn.parentElement.append(fnSpan)
      }
    })
  }

  render() {
    return null
  }

}

export default FootnoteTooltips
