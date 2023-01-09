import React from "react"

import "../css/dark-mode-toggle.css"

const DarkModeToggle = () => {

  // The suppressHydrationWarning stops develop mode complaining about mismatched attributes
  // https://reactjs.org/docs/dom-elements.html#suppresshydrationwarning
  return (
    <aside id="dark-mode-toggle">
      <dark-mode-toggle
        permanent=""
        appearance="toggle"
        suppressHydrationWarning
      ></dark-mode-toggle>
    </aside>
  )
}

export default DarkModeToggle
