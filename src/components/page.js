import React from "react"

import Banner from "../components/banner"

import "./page.css"

const Layout = ({ children }) => {
  return (
    <>
      <Banner />
      <div id="page">{children}</div>
    </>
  )
}

export default Layout
