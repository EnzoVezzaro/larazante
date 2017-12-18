// Preloader
$(document).ready(function() {

  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
      $(".loading-page .counter h1").html(c + "%");
      $(".loading-page .counter hr").css("width", c + "%");
      //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

    /*
    $(".loading-page .counter h1.color").css("width", c + "%");
    */
    counter++;
    c++;

    if(counter == 101) {
        clearInterval(i);
        $(".loading-container").fadeOut();
    }
  }, 50);
});

// navbar
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
}

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

/* Slick Carousel */
$('#carousel_crew').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  refresh: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('#carousel_cast').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  refresh: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$( document ).ready(function(){
  setTimeout(function(){
    $('#carousel_crew').css('display', 'none');
  }, 2500);
});

$( '#carousel_cast_link' ).click(function(){
  $('#carousel_cast').css('display', 'flex');
  $('#carousel_crew').css('display', 'none');
});

$( '#carousel_crew_link' ).click(function(){
  $('#carousel_cast').css('display', 'none');
  $('#carousel_crew').css('display', 'block');
});


// Smooth Scrolling
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    closeNav();
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


/* Video Trailer VC */
$("#trailer_vc_movie").click(function (ev) {
    /*$("#trailer_voces")[0].src += "?autoplay=1";
    setTimeout(function(){ $("#trailer_voces").show(); }, 200);*/
    var play = 'playVideo';
    toggleVideo(play);
});

$("#voces_modal").click(function (ev) {
    /*$("#trailer_voces")[0].src += "?autoplay=1";
    setTimeout(function(){ $("#trailer_voces").show(); }, 200);*/
    var stop = 'stop';
    toggleVideo(stop);
});

function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var iframe = $("#trailer_vc_movie")[0].contentWindow;
    func = state == 'stop' ? 'pauseVideo' : 'playVideo';
    if (state == 'playVideo') {
      $("#trailer_voces")[0].src = "https://www.youtube.com/embed/tojgJx_dUiw?autoplay=1";
    } else if (state == 'stop' ){
      $("#trailer_voces")[0].src = "https://www.youtube.com/embed/tojgJx_dUiw";
    }

}
