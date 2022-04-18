// Lightzoom

;( function( $ ) {

  $( '.lightzoom' ).lightzoom( {
    boxClass: "my-box-class",
    speed: 400,
    viewTitle: true,
    isOverlayClickClosing: false,
    isWindowClickClosing: true,
    isEscClosing: true,
    titleColor: "red",
    overlayColor: ""
  } );

} )( jQuery );


//Change position background
$(window).scroll(function () {
  if ($(document).scrollTop() <= 1000) {
      $('.bg').removeClass('pos');
  } else {
      $('.bg').addClass('pos');
  }
});