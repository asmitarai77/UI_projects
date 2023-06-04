$(".packageslider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
  
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  jQuery(document).ready(function () {
    jQuery(".logo-slider").owlCarousel({
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
  
    jQuery(".logo-slider").trigger("play.owl.autoplay", [2000]);
  
    function setSpeed() {
      jQuery(".logo-slider").trigger("play.owl.autoplay", [6000]);
    }
  
    setTimeout(setSpeed, 1000);
  });