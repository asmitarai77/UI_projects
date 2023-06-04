//   this is navbar sticky js
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

$(window).scroll(function(){
    if ($(this).scrollTop() > 80) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});

// logo slider


jQuery(document).ready(function () {
    jQuery(".customer-logo").owlCarousel({
      loop: true,
      items: 5,
      dots: false,
      nav: false,
      margin: 60,
      autoplay: true,
      slideTransition: "linear",
      autoplaySpeed: 6000,
      smartSpeed: 6000,
      center: true,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  
    jQuery(".customer-logo").trigger("play.owl.autoplay", [2000]);
  
    function setSpeed() {
      jQuery(".customer-logo").trigger("play.owl.autoplay", [6000]);
    }
  
    setTimeout(setSpeed, 1000);
  });