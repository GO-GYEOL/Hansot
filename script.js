$(document).ready(function () {
  $(".navbar>.menu").hover(function () {
    $(".navbar > .sub-menu").toggleClass("active");
  });
  $(".scroll-navbar>.menu").hover(function () {
    $(".scroll-navbar > .sub-menu").toggleClass("active");
  });

  $(window).scroll(function () {
    var scroll_top = $(this).scrollTop();
    if (scroll_top >= 3) {
      $(".navbar").removeClass("active");
      $(".scroll-navbar-wrap").addClass("active");
    }
    if (scroll_top < 2) {
      $(".navbar").addClass("active");
      $(".scroll-navbar-wrap").removeClass("active");
    }
  });
});

$(document).ready(function () {
  $(".slider-box").slick({
    // autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
  });
});
