$(document).ready(function() {
  var navOpen = false;
  $('.toggle-nav').click(function() {
    if (navOpen == false) {
      $('.wrapper').css("position", "absolute").animate({
        left: "30%"
      });
      $(this).animate({
        left: "30%"
      }).removeClass("entypo-menu").addClass("entypo-cancel");
      $('nav').animate({
        left: "0%"
      });
      navOpen = true;
    } else {
      $('.wrapper').animate({
        left: "0%"
      }, function() {
        $(this).css("position", "relative");
      });
      $(this).animate({
        left: "0%"
      }).removeClass("entypo-cancel").addClass("entypo-menu");
      $('nav').animate({
        left: "-30%"
      });
      navOpen = false;
    }
  });
  
  // Smooth Anchor Scrolling
  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });
});