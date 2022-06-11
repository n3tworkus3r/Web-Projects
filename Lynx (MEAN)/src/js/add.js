
/***************************************************
******************** SEARCH ************************
***************************************************/

var add_modal = document.getElementById("add_modal");
var add_btn = document.getElementById("add_btn");
var span = document.getElementsByClassName("close")[0];

add_btn.onclick = function() {
  add_modal.style.display = "block";
}

span.onclick = function() {
  add_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == add_modal) {
    add_modal.style.display = "none";
  }
}

//////////////////////////////////////////////////
/////////////////// ACCORDION ////////////////////
//////////////////////////////////////////////////
/*
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  
    this.classList.toggle("active");

    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
*/