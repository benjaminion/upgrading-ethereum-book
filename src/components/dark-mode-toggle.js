import React from "react"

import "../css/dark-mode-toggle.css"

class DarkModeToggle extends React.Component {

  componentDidMount() {
    const toggle = document.querySelector('dark-mode-toggle')
    const body = document.body

    // Set or remove the `dark` class the first time.
    toggle.mode === 'dark'
      ? body.classList.add('dark')
      : body.classList.remove('dark')

    // Listen for toggle changes (which includes `prefers-color-scheme` changes)
    // and toggle the `dark` class accordingly.
    toggle.addEventListener('colorschemechange', () => {
      body.classList.toggle('dark', toggle.mode === 'dark')
    })
  }

  render() {
    return (
      <aside id="dark-mode-toggle">
        <dark-mode-toggle
          permanent="true"
        ></dark-mode-toggle>
      </aside>
    )
  }
}

export default DarkModeToggle
