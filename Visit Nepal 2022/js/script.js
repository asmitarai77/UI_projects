A// this is navbar js

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("hamburger-icon").style.marginLeft = "450px";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("hamburger-icon").style.marginLeft= "0";
  }

//   this is navbar sticky js

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// this is logo slider

jQuery(document).ready(function () {
  jQuery(".logo-div").owlCarousel({
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

  jQuery(".logo-div").trigger("play.owl.autoplay", [2000]);

  function setSpeed() {
    jQuery(".logo-div").trigger("play.owl.autoplay", [6000]);
  }

  setTimeout(setSpeed, 1000);
});