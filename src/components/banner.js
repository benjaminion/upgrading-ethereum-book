import React from "react"

import "../css/banner.css"

const Banner = ({path}) => {

  const newPage = "/latest" + path
  
  return (
    <div id="banner">
      <p>You are viewing an outdated version (Altair). The latest version of this page may be <a href={newPage}>here</a>, and the book <a href="/latest">here</a>.</p>
    </div>
  )
}

export default Banner
