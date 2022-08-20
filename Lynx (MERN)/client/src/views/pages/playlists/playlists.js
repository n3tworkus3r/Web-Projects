import React from "react"
import "../library/library.css"

export const PlaylistsPage = () => {
  return(
    <div className="column">
          <div className="card">
            <img className="library_image" src={require('./disk.png')} alt="disk_img"/>
            <p className="track_name">track name 2</p>
          </div>
        </div>
  )
}