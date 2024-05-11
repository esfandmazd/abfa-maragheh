$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    rtl: true,
    loop: true,
    dots: true,
    nav: true,
    navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


  $(window).scroll(function () {
    if ($(window).scrollTop() > 777) {
      $("#totop-btn").addClass('active');
    } else {
      $("#totop-btn").removeClass('active')
    }
  });

  function scrollTop() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
  }
  $("#totop-btn").click(scrollTop);
});