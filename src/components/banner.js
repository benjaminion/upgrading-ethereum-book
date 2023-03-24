import React from "react"

import "../css/banner.css"

const Banner = ({path}) => {

  if (true) {

    return null

  } else {

    const newPage = "/latest" + path

    return (
      <div id="banner">
        <p>This version is old (Bellatrix). The latest book is <a href="/latest">here</a>, and the updated page may be <a href={newPage}>here</a>.</p>
      </div>  
    )

  }
}

export default Banner
