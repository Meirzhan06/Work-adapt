
$(document).ready(function() {
    $('.bars').click(function(event) {
        $('.burger-menu').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.button-close-burger').click(function(event) {
        $('.burger-menu').removeClass('active');
    });
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
$(document).ready(function(){
  $('.slider').slick({
    dots:true,
    adaptiveHeight:true,
    slidesToShow:3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
