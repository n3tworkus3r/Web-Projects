import React from "react"
import "./library.css"

export const LibraryPage = () => {
  return(
    <div id="main">
      <div className="row">
        <div className="column">
          <div className="card">
            <img className="library_image" src={require('./disk.png')} alt="disk_img"/>
            <p className="track_name">track name 1</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="library_image" src={require('./disk.png')} alt="disk_img"/>
            <p className="track_name">track name 2</p>
          </div>
        </div>
        
        <div className="column">
          <div className="card">
            <img className="library_image" src={require('./disk.png')} alt="disk_img"/>
            <p className="track_name">track name 3</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="library_image" src={require('./disk.png')} alt="disk_img"/>
            <p className="track_name">track name 4</p>
          </div>
        </div>
        
        <div className="column">
          <div className="card">
            <img className="library_image" src={require('./disk.png')} alt="disk_img"/>
            <p className="track_name">track name 4</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="library_image" src={require('./disk.png')} alt="disk_img"/>
            <p className="track_name">track name 4</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="library_image" src={require('./disk.png')} alt="disk_img"/>
            <p className="track_name">track name 4</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="library_image" src={require('./disk.png')} alt="disk_img"/>
            <p className="track_name">track name 4</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="library_image" src={require('./disk.png')} alt="disk_img"/>
            <p className="track_name">track name 4</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="library_image" src={require('./disk.png')} alt="disk_img"/>
            <p className="track_name">track name 4</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="library_image" src={require('./disk.png')} alt="disk_img"/>
            <p className="track_name">track name 4</p>
          </div>
        </div>
      </div>
    </div>
  )
}