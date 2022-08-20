import React from "react";
import { ReactComponent as Play } from "./assets/play.svg";
import { ReactComponent as Pause } from "./assets/pause.svg";
import { ReactComponent as Next } from "./assets/next.svg";
import { ReactComponent as Prev } from "./assets/prev.svg";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}) => (
  <div className="audio_controls">
    <button type="button" className="prev_btn" aria-label="Previous" onClick={onPrevClick}>
      <Prev />
    </button>

    {isPlaying ? (
      <button type="button" className="pause_btn" onClick={() => onPlayPauseClick(false)} aria-label="Pause">
        <Pause />
      </button>
    ) : (
      <button type="button" className="play_btn" onClick={() => onPlayPauseClick(true)} aria-label="Play">
        <Play />
      </button>
    )}

    <button type="button" className="next_btn" aria-label="Next" onClick={onNextClick}>
      <Next />
    </button>
  </div>
);

export default AudioControls;
