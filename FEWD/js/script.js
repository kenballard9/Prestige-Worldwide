/*$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.myNav').fadeOut();
    } else {
      $('.myNav').fadeIn();
    }
  });*/

  $(window).scroll(function(){
    $(".myNav").css("opacity", 1 - $(window).scrollTop() / 250);
  });