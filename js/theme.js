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


  // START JS KAMTAVAN IN TAVANIR
  let cls_name = 0;
  $("#contrust").click(function () {
    cls_name += 1;
    if (cls_name == 1) {
      $('body').removeClass().addClass('bg-background dark')
      $("#cont-1").addClass('active').siblings().removeClass('active');
    } else if (cls_name == 2) {
      $('body').removeClass().addClass('bg-background yellow');
      $("#cont-2").addClass('active').siblings().removeClass('active');
    } else if (cls_name == 3) {
      $('body').removeClass().addClass('bg-background light-white');
      $("#cont-3").addClass('active').siblings().removeClass('active');
    } else {
      $('body').removeClass().addClass('bg-background');
      $("[id^=cont-]").removeClass('active');
      cls_name = 0;
    }
  });

  $('#changeFont').on('click', function () {
    var myArray = new Array();
    myArray[0] = "iranyekan";
    myArray[1] = "tahoma";
    myArray[2] = "arial";
    myArray[3] = "IranNastaliq";
    var j = 0;
    var p = document.getElementsByTagName('ul');
    var q = document.getElementsByTagName('div');
    var t = document.getElementsByTagName('td');
    var l = document.getElementsByTagName('li');
    var h = document.getElementsByTagName('h1');
    var b = document.getElementsByTagName('span');
    var bb = document.getElementsByTagName('b');
    var aa = document.getElementsByTagName('a');
    var ff = document.getElementsByTagName('figcaption');
    var lb = document.getElementsByTagName('label');

    for (k = 0; k < lb.length; k++) {
      if (!lb[k].style.fontFamily) {
        lb[k].style.fontFamily = "IranSans";
      }
      for (i = 0; i < 4; i++) {
        if (lb[k].style.fontFamily == myArray[i]) {
          if (i < 3) {
            j = (i + 1);
          } else {
            j = 0;
          }
          lb[k].style.fontFamily = myArray[j];
          break;
        }
      }
    }
    for (k = 0; k < p.length; k++) {
      if (!p[k].style.fontFamily) {
        p[k].style.fontFamily = "iranyekan";
      }
      for (i = 0; i < 4; i++) {
        if (p[k].style.fontFamily == myArray[i]) {
          if (i < 3) {
            j = (i + 1);
          } else {
            j = 0;
          }
          p[k].style.fontFamily = myArray[j];
          break;
        }
      }
    }

    for (k = 0; k < q.length; k++) {
      if (!q[k].style.fontFamily) {
        q[k].style.fontFamily = "iranyekan";
      }
      for (i = 0; i < 4; i++) {
        if (q[k].style.fontFamily == myArray[i]) {
          if (i < 3) {
            j = (i + 1);
          } else {
            j = 0;
          }
          q[k].style.fontFamily = myArray[j];
          break;
        }
      }
    }
    for (k = 0; k < t.length; k++) {
      if (!t[k].style.fontFamily) {
        t[k].style.fontFamily = "iranyekan";
      }
      for (i = 0; i < 4; i++) {
        if (t[k].style.fontFamily == myArray[i]) {
          if (i < 3) {
            j = (i + 1);
          } else {
            j = 0;
          }
          t[k].style.fontFamily = myArray[j];
          break;
        }
      }
    }
    for (k = 0; k < l.length; k++) {
      if (!l[k].style.fontFamily) {
        l[k].style.fontFamily = "iranyekan";
      }
      for (i = 0; i < 4; i++) {
        if (l[k].style.fontFamily == myArray[i]) {
          if (i < 3) {
            j = (i + 1);
          } else {
            j = 0;
          }
          l[k].style.fontFamily = myArray[j];
          break;
        }
      }
    }

    for (k = 0; k < h.length; k++) {
      if (!h[k].style.fontFamily) {
        h[k].style.fontFamily = "iranyekan";
      }
      for (i = 0; i < 4; i++) {
        if (h[k].style.fontFamily == myArray[i]) {
          if (i < 3) {
            j = (i + 1);
          } else {
            j = 0;
          }
          h[k].style.fontFamily = myArray[j];
          break;
        }
      }
    }
    for (k = 0; k < b.length; k++) {
      if (!b[k].style.fontFamily) {
        b[k].style.fontFamily = "iranyekan";
      }
      for (i = 0; i < 4; i++) {
        if (b[k].style.fontFamily == myArray[i]) {
          if (i < 3) {
            j = (i + 1);
          } else {
            j = 0;
          }
          b[k].style.fontFamily = myArray[j];
          break;
        }
      }
    }
    for (k = 0; k < bb.length; k++) {
      if (!bb[k].style.fontFamily) {
        bb[k].style.fontFamily = "iranyekan";
      }
      for (i = 0; i < 4; i++) {
        if (bb[k].style.fontFamily == myArray[i]) {
          if (i < 3) {
            j = (i + 1);
          } else {
            j = 0;
          }
          bb[k].style.fontFamily = myArray[j];
          break;
        }
      }
    }
    for (k = 0; k < aa.length; k++) {
      if (!aa[k].style.fontFamily) {
        aa[k].style.fontFamily = "iranyekan";
      }
      for (i = 0; i < 4; i++) {
        if (aa[k].style.fontFamily == myArray[i]) {
          if (i < 3) {
            j = (i + 1);
          } else {
            j = 0;
          }
          aa[k].style.fontFamily = myArray[j];
          break;
        }
      }
    }
    for (k = 0; k < ff.length; k++) {
      if (!ff[k].style.fontFamily) {
        ff[k].style.fontFamily = "iranyekan";
      }
      for (i = 0; i < 4; i++) {
        if (ff[k].style.fontFamily == myArray[i]) {
          if (i < 3) {
            j = (i + 1);
          } else {
            j = 0;
          }
          ff[k].style.fontFamily = myArray[j];
          break;
        }
      }
    }
  });

  let count = 1,
    num_size = 14;
  // Size Texts In Body
  $("#nSize").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest('body').find('*').css('font-size', '');
  });

  $("#minSize").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    if (num_size > 5) {
      num_size -= 2;
      $(this).closest('body').find('*').css('font-size', num_size + 'px');
    }
  });

  $("#maxSize").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    if (num_size < 30) {
      num_size += 2;
      $(this).closest('body').find('*').css('font-size', num_size + 'px');
    }
  });
  // End Size Texts In Body

  // Zoom In And Zoom Out Page
  let userAgent = navigator.userAgent;
  let browserName;
  $("#minPage").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    if (count >= 0.4) {
      count -= .1;
      if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "chrome";
        $('body').css({
          'zoom': count,
          'overflow-x': 'hidden'
        });

      } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "firefox";
        $('body').css({
          'transform': 'scale(' + count + ')',
          'overflow-x': 'hidden'
        });
      } else {
        browserName = "No browser detection";
        $('body').css('transform', 'scale(' + count + ')');
      }
    }
  });
  $("#nPage").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    count = 1;
    $('body').css('zoom', count);
    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "chrome";
      $('body').css({
        'zoom': count,
        'overflow-x': 'hidden'
      });

    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "firefox";
      $('body').css({
        'transform': 'scale(' + count + ')',
        'overflow-x': 'hidden'
      });
    } else {
      browserName = "No browser detection";
      $('body').css({
        'transform': 'scale(' + count + ')',
        'overflow-x': 'hidden'
      });
    }
  });
  $("#maxPage").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    if (count < 2) {
      count += .1;
      if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "chrome";
        $('body').css({
          'zoom': count,
          'overflow-x': 'hidden'
        });

      } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "firefox";
        $('body').css({
          'transform': 'scale(' + count + ')',
          'overflow-x': 'auto'
        });
      } else {
        browserName = "No browser detection";
        $('body').css({
          'transform': 'scale(' + count + ')',
          'overflow-x': 'hidden'
        });
      }
    }
  });
  // End Zoom In And Zoom Out Page

  // Start Js Kamtavan 
  $("#showWeak").click(function () {
    console.log("Hello World");
    $(this).closest('.shrotcut-menu-two').find('ul').toggleClass('active');
  });
  // End Js Kamtavan 
});

document.addEventListener("DOMContentLoaded", function () {


  /////// Prevent closing from click inside dropdown
  document.querySelectorAll('.dropdown-menu').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  })



  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {

    // close all inner dropdowns when parent is closed
    document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        // after dropdown is hidden, then find all submenus
        this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
          // hide every submenu as well
          everysubmenu.style.display = 'none';
        });
      })
    });

    document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
      element.addEventListener('click', function (e) {

        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains('submenu')) {
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          console.log(nextEl);
          if (nextEl.style.display == 'block') {
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }

        }
      });
    })
  }
  // end if innerWidth

});