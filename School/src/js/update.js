
/***************************************************
******************** UPDATE ************************
***************************************************/

var update_modal = document.getElementById("update_modal");
var update_btn = document.getElementById("update_btn");
var span = document.getElementsByClassName("close")[1];

update_btn.onclick = function() {
    update_modal.style.display = "block";
}

span.onclick = function() {
    update_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == update_modal) {
    update_modal.style.display = "none";
  }
}
