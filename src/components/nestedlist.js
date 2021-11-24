import React from "react"
import { Link } from "gatsby"

function ConditionalLink({to, children, nolink}) {
  const ret = nolink
        ? <>{children}</>
        : <Link to={to} activeClassName="index-active">{children}</Link>
  return (ret) 
}

export default function NestedList({idx, items, level}) {
  var ret = []
  var i = idx
  while (i < items.length) {
    const item = items[i]
    if (item.level === level) {
      ret.push(
          <li key={i}><ConditionalLink to={item.page} nolink={item.hide}><span className="index-string">{item.index}</span> {item.title}</ConditionalLink></li>
      )
      i++
    } else if (item.level > level) {
      ret.push(
          <NestedList key={i} items={items} level={level + 1} idx={i} />
      )
      while (i < items.length && items[i].level > level)
        i++
    } else {
      break
    }
  }
  return (<ul>{ret}</ul>)
}
