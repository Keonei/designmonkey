// scrollto animation //

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    var target = $(this.hash);

    target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});


// scrollup animation //

$(document).scroll(function() {
  var y = $(this).scrollTop();
  var x = jQuery('#main').offset().top;

  if (y > x) {
    $('.scrollUp, float-banner').fadeIn(200);
  } else {
    $('.scrollUp, float-banner').fadeOut(200);
  }
});

// setting modal background image //

function sheduBg () {
  document.getElementById("modal-bg").style.backgroundImage = "url('images/shedu-logo-sketches2.png')";
};

function wodanazBg () {
  document.getElementById("modal-bg").style.backgroundImage = "url('images/wodanaz-sketches2.png')";
};
