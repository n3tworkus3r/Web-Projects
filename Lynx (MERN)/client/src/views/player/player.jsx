import React from 'react'
import './player.css'
import  useAudio from '../../hooks/player.hook.jsx'
import { PlayButton } from '../../components/play controls/play_button';

export const PlayerPage = () => {
  const { element, state, controls } = useAudio({
    src: 'http://127.0.0.1:8080/2.mp3'
  })

  return (
    <div className='player'> 
      <div className='player_container'> 
        {element}

        <div className='controls_container'>
          <button onClick={() => controls.seek(state.time - 10)}>-10 sec</button>

          <button className='play_btn_container' onClick={() => { state.paused ? controls.play() : controls.pause()}}>
            <PlayButton/>
          </button>

          <button onClick={() => controls.seek(state.time + 10)}>+10 sec</button>
        </div>
        

        {Math.round(state.time)} / {Math.round(state.duration)}

        Playback Speed (100 = 1)


        <input
          onChange={e => controls.setPlaybackRate(e.target.value / 100)}
          type="number"
          value={state.playbackRate * 100}
        />

      </div>
    </div>
  );
};