audio_file.onchange = function(){
  var files = this.files;
  var file = URL.createObjectURL(files[0]); 
              audio_player.src = file; 
  audio_player.play();
};
<input id="audio_file" type="file" accept="audio/*" />
<audio id="audio_player" />