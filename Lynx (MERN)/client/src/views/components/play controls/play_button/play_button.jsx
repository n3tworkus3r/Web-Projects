import React from 'react'
import './play_button.css'

export const PlayButton = () => {
  return(
    <div className="playpause">
      <input type="checkbox" value="None" id="playpause" name="check" />
      <label htmlFor="playpause" ></label>
    </div>
  )
}