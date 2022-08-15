function openNav() {
  document.getElementById("navbar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("navbar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("nav_btn").style.visibility.hidden;
}