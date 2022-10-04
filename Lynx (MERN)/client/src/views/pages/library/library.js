import React from "react"
import "./library.css"
import { use_http } from '../../../hooks/http.hook'
import { Player } from "../../components/player/player"
import { useState } from "react"
export const LibraryPage = () => {
  const {request} = use_http()

  ////////////////////////////////////////
  //// ОБРАБОТЧИК ВОСПРОИЗВЕДЕНИЯ ТРЕКА
  ////////////////////////////////////////
  const track_id_handler = async () => {
    try {
      const data = await request('/library:id', 'GET')
      
    } catch (error) { }
  }



  ////////////////////////////////////////
  //// ОТОБРАЖЕНИЕ ТРЕКА
  ////////////////////////////////////////
  const [playerActive, set_player_active] = useState(false)


  ////////////////////////////////////////
  //// ОБЪЕКТ С ТРЕКАМИ
  ////////////////////////////////////////

  const tracks = [['1','http://127.0.0.1:8080/1.mp3'],['2','http://127.0.0.1:8080/2.mp3'],['3','http://127.0.0.1:8080/3.mp3'],['4','http://127.0.0.1:8080/4.mp3']]
  return(
    <div id="main">


      <Player active={playerActive} set_active={set_player_active} tracks={tracks} ></Player>


      <div className="row">
        <div className="column">
        {/*<NavLink to="/library:id">*/}
          <div className="card"  onClick={() => set_player_active(true)}>
            <img className="library_image" src={require('./disk.png')} alt="disk_img"/>
            <p className="track_name">track name 1</p>
          </div>
        {/*</NavLink>*/}
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