// Lightzoom
$( document ).ready(function() {
  $( '.lightzoom' ).lightzoom( {
    boxClass: "my-box-class",
    isOverlayClickClosing: false,
    isWindowClickClosing: true,
    isEscClosing: true,
  });
});


//Change position background
$(window).scroll(function () {
  if ($(document).scrollTop() <= 1000) {
      $('.bg').removeClass('pos');
  } else {
      $('.bg').addClass('pos');
  }
});