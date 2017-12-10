// navbar
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

/* Slick Carousel */
$('.carousel').slick({
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
  $('#carousel_crew').css('display', 'none');
});

$( '#carousel_cast_link' ).click(function(){
  $('#carousel_cast').css('display', 'flex');
  $('#carousel_crew').css('display', 'none');
});

$( '#carousel_crew_link' ).click(function(){
  $('#carousel_cast').css('display', 'none');
  $('#carousel_crew').css('display', 'block');
});
