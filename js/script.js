//This is the Jquery function responsible for making the navigation bar disappear when scrolling down the screen
//and reappearing once the page is scrolled to the top.

  $(window).scroll(function(){
    $(".myNav").css("opacity", 1 - $(window).scrollTop() / 250);
  });