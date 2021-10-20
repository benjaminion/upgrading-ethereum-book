import React from "react"
import { Link } from "gatsby"

function NestedList(props) {
  var ret = []
  var idx = props.idx
  while (idx < props.items.length) {
    const item = props.items[idx]
    if (item.level === props.level) {
      ret.push(
          <li key={idx}><Link to={item.page} activeClassName="index-active"><span className="index-string">{item.index}</span> {item.title}</Link></li>
      )
      idx++
    } else if (item.level > props.level) {
      ret.push(
          <NestedList key={idx} items={props.items} level={props.level + 1} idx={idx} />
      )
      while (idx < props.items.length && props.items[idx].level > props.level)
        idx++
    } else {
      break
    }
  }
  return (<ul>{ret}</ul>)
}

// Format pages as a list according to their index data.
// Depth is the length of prefix to ignore
const PageList = ({pages, depth}) => {

  const filteredPages = pages.filter(p => p.node.frontmatter.index !== null)

  if (filteredPages.length === 0) return null

  // Make a flat array of list level info and the data we'll be using in the list
  const layout = filteredPages.sort((a, b) => {
    return a.node.frontmatter.index.join().localeCompare(b.node.frontmatter.index.join())}).map(p => {return ({
      level: p.node.frontmatter.index.length,
      index: p.node.frontmatter.index.join("."),
      title: p.node.frontmatter.titles[p.node.frontmatter.index.length - 1],
      page: p.node.frontmatter.path
    })})

  return (<NestedList items={layout} level={depth + 1} idx={0} />)
}

export default PageList
