import React from "react"
import "./library.css"

export const LibraryPage = () => {
  return(
    <div id="main">
      <div className="row">
        <div className="column">
          <div className="card">
            <img className="library_image" src="./disk.png"/>
            <p>Name</p>
            <p>Artist</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="library_image" src="disk.png"/>
            <p>Name</p>
            <p>Artist</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="library_image" src="disk.png"/>
            <p>Name</p>
            <p>Artist</p>
          </div>
        </div>
        
        <div className="column">
          <div className="card">
            <img className="library_image" src="disk.png"/>
            <p>Name</p>
            <p>Artist</p>
          </div>
        </div>
        
        <div className="column">
          <div className="card">
            <img className="library_image" src="disk.png"/>
            <p>Name</p>
            <p>Artist</p>
          </div>
        </div>
        
        <div className="column">
          <div className="card">
            <img className="library_image" src="disk.png"/>
            <p>Name</p>
            <p>Artist</p>
          </div>
        </div>
      </div>
    </div>
  )
}