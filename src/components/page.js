import React from "react"

import "./page.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
