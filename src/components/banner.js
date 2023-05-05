import React from "react"

import "../css/banner.css"

const Banner = ({path}) => {

  const addBanner = false

  if (addBanner) {

    const newPage = "/latest" + path

    return (
      <div id="banner">
        <p>This version is old (Capella). The latest book is <a href="/latest">here</a>, and the updated page may be <a href={newPage}>here</a>.</p>
      </div>  
    )

  } else {

    return null

  }
}

export default Banner
