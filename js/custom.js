(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
  });


  // MENU
  $('.navbar-collapse a').on('click',function(){
    $(".navbar-collapse").collapse('hide');
  });

  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });


  // SLIDER
  $('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    items:1,
    loop:true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
  });


  // PARALLAX EFFECT
  $.stellar({
    horizontalScrolling: false,
  });

  // CONTACT FORM
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    let name = $("#cf-name").val();
    let email = $("#cf-email").val();
    let message = $("#cf-message").val();
    let formData = $("#contact-form").serialize();

    function isValidEmail(emailAddress) {
      let pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
      return pattern.test(emailAddress);
    }
    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
      $.ajax({
        type: "POST",
        url: "php/contact.php",
        data: formData,
        success: function (message) {
          if(message === "SUCCESS"){
            $('.text-success').fadeIn(1000);
            $('.text-danger').fadeOut(500);
          } else {
            $('.text-failure').fadeIn(1000);
            $('.text-danger').fadeOut(500);
            $('.text-success').fadeOut(500);
          }
        }
      });
    }
    else {
      $('.text-danger').fadeIn(1000);
      $('.text-success').fadeOut(500);
    }
    return false;
  });



  // SMOOTHSCROLL
  $(function() {
    $('.custom-navbar a, #home a').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });


  // WOW ANIMATION
  new WOW({ mobile: false }).init();

})(jQuery);
