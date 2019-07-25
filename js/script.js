//This script file holds two JQuery Functions. The firs makes it so that the navigation bar disappears on scroll.
//The second makes it so that there is a smooth transition to the hyperlink's destination once the hyperlink is clicked.

  $(window).scroll(function(){
    $(".myNav").css("opacity", 1 - $(window).scrollTop() / 250);
  });

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});