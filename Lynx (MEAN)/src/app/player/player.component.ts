import { Component } from '@angular/core';





@Component({
  selector: 'mean-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  


 now_playing = document.querySelector(".now-playing");
 track_art = document.querySelector(".track-art");
 track_name = document.querySelector(".track-name");
 track_artist = document.querySelector(".track-artist");

 playpause_btn = document.querySelector(".playpause-track");
 next_btn = document.querySelector(".next-track");
 prev_btn = document.querySelector(".prev-track");

 seek_slider = document.querySelector(".seek_slider");
 volume_slider = document.querySelector(".volume_slider");
 curr_time = document.querySelector(".current-time");
 total_duration = document.querySelector(".total-duration");

 track_index = 0;
 isPlaying = false;
 updateTimer;

// Create new audio element
 curr_track = document.createElement('audio');

// Define the tracks that have to be played
 track_list = [
  {
    name: "Night Owl",
    artist: "Broke For Free",
    image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "./this_blood.mp3"
  }
];

random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

loadTrack(track_index) {
  clearInterval(this.updateTimer);
  //this.resetValues();
  this.curr_track.src = "./this_blood.mp3";
  this.curr_track.load();

  //this.updateTimer = setInterval(this.seekUpdate, 1000);
  this.curr_track.addEventListener("ended", this.nextTrack);
  this.random_bg_color();
}
/*
resetValues(self) {
  this.curr_time.textContent = "00:00";
  this.total_duration.textContent = "00:00";
  this.seek_slider.value = 0;
}
*/
// Load the first track in the tracklist


playpauseTrack() {
  this.curr_track.load();
  if (!this.isPlaying) this.playTrack();
  else this.pauseTrack();
}

playTrack() {
  this.curr_track.play();
  this.curr_track.pause();
  this.curr_track.play();
  this.isPlaying = true;
 // playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

pauseTrack() {
  this.curr_track.pause();
  this.isPlaying = false;
 // playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

nextTrack() {
  if (this.track_index < this.track_list.length - 1)
  this.track_index += 1;
  else this.track_index = 0;
  this.loadTrack(this.track_index);
  this.playTrack();
}

prevTrack() {
  if (this.track_index > 0)
  this.track_index -= 1;
  else this.track_index = this.track_list.length;
  this.loadTrack(this.track_index);
  this.playTrack();
}
/*

seekTo() {
  let seekto = this.curr_track.duration * (this.seek_slider.value / 100);
  this.curr_track.currentTime = seekto;
}

setVolume() {
  this.curr_track.volume = this.volume_slider.value / 100;
}
/*
seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    currentMinutes = Math.floor(curr_track.currentTime / 60);
    currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    durationMinutes = Math.floor(curr_track.duration / 60);
    durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

*/


}
