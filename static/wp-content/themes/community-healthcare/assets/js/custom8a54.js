// Mobile Menu
// $(".navSection .item-mobileMenu").click(function(){
//     $("body").addClass("mobile-nav-open");
// });
// $(".navSection .popupCloseButton").click(function(){
//     $("body").removeClass("mobile-nav-open");
// });

$("header .menu-toggle").click(function () {
  $(this).toggleClass("toggled");
  $("html").toggleClass("overflow-hidden");
  $("body").toggleClass("mobile-nav-open");
  $("header .main-navigation").toggleClass("mobile-menu-open");
  // $('#overlayMenu').toggleClass('open');
});

$("header .main-navigation .menu-item a").click(function () {
  $("header .main-navigation").removeClass("mobile-menu-open");
  $("header .menu-toggle").removeClass("toggled");
});

$("body").click(function () {
  $(".menu-item-has-children").removeClass("show");
});
$(".menu-item-has-children > a").after(
  '<img src="' + $("#downArrow").val() + '">'
);
$(".menu-item-has-children > a").click(function () {
  event.stopPropagation();
  $(".menu-item-has-children").removeClass("show");
  $(this).parent().addClass("show");
});

// $(".menu-item-has-children.menu-item-36 > a + img").click(function () {
//   $(".menu-item-has-children").removeClass("show");
//   $(".menu-item-has-children.menu-item-36").toggleClass("show");
// });
// $(".menu-item-has-children.menu-item-38 > a + img").click(function () {
//   $(".menu-item-has-children").removeClass("show");
//   $(".menu-item-has-children.menu-item-38").toggleClass("show");
// });

$(".field-rn-application .read-more-btn").click(function () {
  $(".field-rn-application").toggleClass("show");

  if ($(".field-rn-application").hasClass("show")) {
    $(".application-info-block.show .read-more-btn").html("read less");
  } else {
    $(".application-info-block .read-more-btn").html("read more");
  }
});

$(".hha-application .read-more-btn").click(function () {
  $(".hha-application").toggleClass("show");

  if ($(".hha-application").hasClass("show")) {
    $(".application-info-block.show .read-more-btn").html("read less");
  } else {
    $(".application-info-block .read-more-btn").html("read more");
  }
});

$(".orientation_application .read-more-btn").click(function () {
  $(".orientation_application").toggleClass("show");

  if ($(".orientation_application").hasClass("show")) {
    $(".orientation_application.show .read-more-btn").html("read less");
  } else {
    $(".orientation_application .read-more-btn").html("read more");
  }
});

$(".pca-trainer-application .read-more-btn").click(function () {
  $(".pca-trainer-application").toggleClass("show");

  if ($(".pca-trainer-application").hasClass("show")) {
    $(".application-info-block.show .read-more-btn").html("read less");
  } else {
    $(".application-info-block .read-more-btn").html("read more");
  }
});

$(".pca-application .read-more-btn").click(function () {
  $(".pca-application").toggleClass("show");

  if ($(".pca-application").hasClass("show")) {
    $(".application-info-block.show .read-more-btn").html("read less");
  } else {
    $(".application-info-block .read-more-btn").html("read more");
  }
});

$(".lnp-application-block .read-more-btn").click(function () {
  $(".lnp-application-block").toggleClass("show");

  if ($(".lnp-application-block").hasClass("show")) {
    $(".lnp-application-block.show .read-more-btn").html("read less");
  } else {
    $(".lnp-application-block .read-more-btn").html("read more");
  }
});

$(".privateDutySec .read-more-btn").click(function () {
  $(".privateDutySec").toggleClass("show");

  if ($(".privateDutySec").hasClass("show")) {
    $(".privateDutySec.show .read-more-btn").html("read less");
  } else {
    $(".privateDutySec .read-more-btn").html("read more");
  }
});

// Aos
AOS.init({
  duration: 1000,
  once: true,
  // offset: 120,
});

// Integrates Swiper slider
var swiper = new Swiper(".grid-slider-block", {
  slidesPerView: 4,
  spaceBetween: 80,
  // loop: true,
  // pagination: {
  //     el: ".swiper-pagination",
  //     type: "fraction",
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 1.2,
      loop: false,
    },
    640: {
      spaceBetween: 30,
      slidesPerView: 2.2,
      loop: false,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 3,
      loop: false,
    },
    1280: {
      spaceBetween: 30,
      slidesPerView: 4,
      loop: false,
    },
    1700: {
      spaceBetween: 80,
      loop: false,
    },
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

var swiper = new Swiper(".why-choose-grid-block .grid-slider-block", {
  slidesPerView: 3,
  spaceBetween: 85,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      spaceBetween: 40,
      slidesPerView: 1.2,
      loop: false,
    },
    640: {
      spaceBetween: 40,
      slidesPerView: 1.5,
      loop: false,
    },
    1024: {
      spaceBetween: 40,
      slidesPerView: 2,
      loop: false,
    },
    1280: {
      spaceBetween: 40,
      slidesPerView: 3,
      loop: false,
    },
    1700: {
      spaceBetween: 85,
      loop: false,
    },
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

var swiper = new Swiper(".testimonial-slider-block", {
  slidesPerView: 1,
  spaceBetween: 1,

  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // breakpoints: {
  //   0: {
  //     // spaceBetween: 26,
  //     slidesPerView: 1,
  //   },
  //   640: {
  //     // spaceBetween: 26,
  //     slidesPerView: 1,
  //   },
  //   1024: {
  //     // spaceBetween: 26,
  //     slidesPerView: 3,
  //   }
  //   ,
  //   1280: {
  //     // spaceBetween: 30,
  //   }
  // }
});

$("#location-select").on("change", function (e) {
  var block_id = $(this).val();
  $(".custom-radio-box").siblings().removeClass("active");
  $(".employee-benefits-grid-block").removeClass("active");
  $(".employee-benefits-grid-block").each(function () {
    var match_id = $(this).attr("tab-content");
    if (block_id == match_id) {
      $(this).addClass("active");
    }
  });
  $(".custom-radio-box").each(function () {
    var match_id = $(this).attr("tab-id");
    if (block_id == match_id) {
      $(this).addClass("active");
    }
  });
});

$(".custom-radio-box").on("click", function (e) {
  var block_id = $(this).attr("tab-id");
  console.log(block_id);
  $("#location-select").val(block_id);

  $(this).siblings().removeClass("active");
  $(".employee-benefits-grid-block").removeClass("active");
  $(this).addClass("active");
  $(".employee-benefits-grid-block").each(function () {
    var match_id = $(this).attr("tab-content");
    if (block_id == match_id) {
      $(this).addClass("active");
    }
  });
});

$(".swiper-button-next , .swiper-button-prev").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// for smooth scroll---------
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    2000
  );
});

/** GSAP Animation */
gsap.registerPlugin(ScrollTrigger);
gsap.to(
  ".easy-homecare-section .ease-homecare-block .image-block .img-box img.overlay-img",
  {
    rotation: 360 * 2,
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      pin: false,
      scrub: 0,
      markers: false,
      start: "top top",
      end: "bottom bottom",
    },
  }
);

gsap.to(".care-need-section .care-need-block .process-overlay-img", {
  rotation: 360,
  duration: 1,
  scale: 0.4,
  ease: "none",
  scrollTrigger: {
    trigger: ".things-different-section",
    pin: false,
    scrub: 0,
    markers: false,
    start: "-=300 top",
    end: "+=1000",
  },
});

gsap.to(".page-title-section .section-overlay-images img.overlay-round-icon", {
  rotation: -360,
  ease: "none",
  scrollTrigger: {
    trigger: ".page-title-section",
    pin: false,
    scrub: 0,
    markers: false,
    start: "top-=100 top",
    end: "bottom+=1000 bottom",
  },
});

gsap.to(".page-title-section .section-overlay-images img.overlay-favicon", {
  rotation: -211,
  xPercent: 48,
  yPercent: -27,
  ease: "none",
  scrollTrigger: {
    trigger: ".page-title-section",
    pin: false,
    scrub: 0,
    markers: false,
    start: "top top",
    end: "bottom+=500 bottom",
  },
});

gsap.to(
  ".quality-care-section .quality-care-block .image-box .overlay-images img.round-img",
  {
    rotation: -360,
    ease: "none",
    scrollTrigger: {
      trigger: ".quality-care-section",
      pin: false,
      scrub: 0,
      markers: false,
      start: "top-=1000 top",
      end: "bottom+=500 bottom",
    },
  }
);

gsap.to(
  ".contact-page-title-section .section-overlay-images img.overlay-round-icon",
  {
    rotation: -360,
    ease: "none",
    scrollTrigger: {
      trigger: ".contact-page-title-section",
      pin: false,
      scrub: 0,
      markers: false,
      start: "top-=100 top",
      end: "bottom+=1000 bottom",
    },
  }
);

let mm = gsap.matchMedia();
mm.add("(min-width: 1400px)", () => {
  gsap.set(
    ".care-need-section .care-need-block .care-need-process-box .process-item-box.box-2",
    { xPercent: -186 }
  );
  gsap.set(
    ".care-need-section .care-need-block .care-need-process-box .process-item-box.box-3",
    { xPercent: -372 }
  );
  gsap.set(
    ".care-need-section .care-need-block .care-need-process-box .process-item-box.box-4",
    { xPercent: -557 }
  );
  gsap.to(
    ".care-need-section .care-need-block .care-need-process-box .process-item-box",
    {
      xPercent: 0,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".care-need-section",
        pin: false,
        scrub: 0,
        markers: false,
        start: "top-=150 top",
        end: "top bottom",
      },
    }
  );
});

mm.add("(min-width: 1200px)", () => {
  /** Home GSAP Animation */
  gsap.to(
    ".easy-homecare-section .ease-homecare-block .image-block .img-box .block-img-hover",
    {
      scale: 0.6,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".easy-homecare-section",
        pin: false,
        scrub: 0,
        markers: false,
        start: "-=200 top",
        end: "bottom bottom",
      },
    }
  );

  gsap.to(
    ".things-different-section .things-different-block .image-block .img-box svg",
    {
      rotation: -35,
      duration: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".things-different-section",
        pin: false,
        scrub: 0,
        markers: false,
        start: "-=200 top",
        end: "top bottom",
      },
    }
  );

  gsap.to(
    ".things-different-section .things-different-block .image-block .img-box img",
    {
      scale: 0.8,
      duration: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".things-different-section",
        pin: false,
        scrub: 0,
        markers: false,
        start: "-=200 top",
        end: "top bottom",
      },
    }
  );

  gsap.timeline({
    scrollTrigger: {
      trigger: ".things-different-section",
      pin: false,
      scrub: 0,
      toggleClass: "animActive",
      start: "-=200 top",
      end: "top+=2000 bottom",
    },
  });

  gsap.set(
    ".care-need-section .care-need-block .care-need-process-box .boxLine",
    { width: 50 }
  );
  gsap.to(
    ".care-need-section .care-need-block .care-need-process-box .boxLine",
    {
      width: "90%",
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".care-need-section",
        pin: false,
        scrub: 0,
        markers: false,
        start: "top-=150 top",
        end: "top bottom",
      },
    }
  );

  gsap.set(
    ".care-need-section .care-need-block .care-need-process-box .process-item-box.box-2",
    { xPercent: -126 }
  );
  gsap.set(
    ".care-need-section .care-need-block .care-need-process-box .process-item-box.box-3",
    { xPercent: -252 }
  );
  gsap.set(
    ".care-need-section .care-need-block .care-need-process-box .process-item-box.box-4",
    { xPercent: -377 }
  );
  gsap.to(
    ".care-need-section .care-need-block .care-need-process-box .process-item-box",
    {
      xPercent: 0,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".care-need-section",
        pin: false,
        scrub: 0,
        markers: false,
        start: "top-=150 top",
        end: "top bottom",
      },
    }
  );

  gsap.set(".care-need-section .content-box", { opacity: 0 });
  gsap.to(".care-need-section .content-box", {
    opacity: 1,
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".care-need-section",
      pin: false,
      scrub: true,
      markers: false,
      start: "top top",
      end: "top bottom",
    },
  });

  /** About Page GSAP Animation */
  // const mainItemBlock = document.querySelectorAll('.serving-family-section .serving-family-block .serving-locations-block .location-item-block');
  // mainItemBlock.addEventListener('mouseover', () => {
  //   // this.style.zIndex = "9";
  //   console.log('I am hover');
  // })

  gsap.to(".who-we-are-section .who-we-are-block .image-block .overlay-img", {
    xPercent: -7,
    ease: "none",
    scrollTrigger: {
      trigger: ".about-title-section",
      pin: false,
      scrub: 0,
      markers: false,
      start: "top+=200 top",
      end: "bottom+=500 bottom",
    },
  });

  gsap.set(
    ".why-choose-section .why-choose-block .why-choose-grid-block .grid-slider-block .swiper-wrapper .swiper-slide.slide-1",
    { xPercent: -50, opacity: 0.3 }
  );
  gsap.set(
    ".why-choose-section .why-choose-block .why-choose-grid-block .grid-slider-block .swiper-wrapper .swiper-slide.slide-2",
    { yPercent: 50, opacity: 0.3 }
  );
  gsap.set(
    ".why-choose-section .why-choose-block .why-choose-grid-block .grid-slider-block .swiper-wrapper .swiper-slide.slide-3",
    { xPercent: 50, opacity: 0.3 }
  );
  gsap.to(
    ".why-choose-section .why-choose-block .why-choose-grid-block .grid-slider-block .swiper-wrapper .swiper-slide",
    {
      xPercent: 0,
      yPercent: 0,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".why-choose-section",
        pin: false,
        scrub: 0,
        markers: false,
        start: "top-=500 top",
        end: "bottom-=200 bottom",
      },
    }
  );

  const child1 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${1})`);
  const child2 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${2})`);
  const child3 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${3})`);
  const child4 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${4})`);
  const child5 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${5})`);
  const child6 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${6})`);
  const child7 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${7})`);
  const child8 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${8})`);
  const child9 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${9})`);
  const child10 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${10})`);
  const child11 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${11})`);
  const child12 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${12})`);
  const child13 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${13})`);
  const child14 = document.querySelector(`.serving-family-section .serving-family-block .serving-locations-block .location-item-block:nth-child(${14})`);
  gsap.set(child1, { xPercent: -70, yPercent: -50 });
  gsap.set(child2, { xPercent: -60, yPercent: -10 });
  gsap.set(child3, { xPercent: -70, yPercent: 50 });
  gsap.set(child4, { xPercent: -50, yPercent: 20 });
  gsap.set(child5, { xPercent: 30, yPercent: -30 });
  gsap.set(child6, { xPercent: 60, yPercent: -50 });
  gsap.set(child7, { xPercent: 30, yPercent: -10 });
  gsap.set(child8, { xPercent: 70, yPercent: 10 });
  gsap.set(child9, { xPercent: 30, yPercent: 50 });
  gsap.set(child10, { xPercent: 50, yPercent: 40 });
  gsap.set(child11, { xPercent: 50, yPercent: 40 });
  gsap.set(child12, { xPercent: 50, yPercent: 40 });
  gsap.set(child13, { xPercent: 50, yPercent: 40 });
  gsap.set(child14, { xPercent: 50, yPercent: 40 });
  gsap.to(".serving-family-section .serving-family-block .serving-locations-block .location-item-block", {
    xPercent: 0,
    yPercent: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".serving-family-section",
      pin: false,
      scrub: 0,
      markers: false,
      start: "top-=300 top",
      end: "bottom-=200 bottom",
    },
  });

  /** Insurance Page GSAP Animation */
  const grid1 = document.querySelector(`.we-believe-section .believe-block .believe-grid-block .grid-slider-block .grid-item:nth-child(${1})`);
  const grid2 = document.querySelector(`.we-believe-section .believe-block .believe-grid-block .grid-slider-block .grid-item:nth-child(${2})`);
  const grid3 = document.querySelector(`.we-believe-section .believe-block .believe-grid-block .grid-slider-block .grid-item:nth-child(${3})`);
  const grid4 = document.querySelector(`.we-believe-section .believe-block .believe-grid-block .grid-slider-block .grid-item:nth-child(${4})`);
  gsap.set(grid1, { xPercent: -40, opacity: 0.5 });
  gsap.set(grid2, { xPercent: -166, opacity: 0.5 });
  gsap.set(grid3, { xPercent: -292, opacity: 0.5 });
  gsap.set(grid4, { xPercent: -418, opacity: 0.5 });
  gsap.to(".we-believe-section .believe-block .believe-grid-block .grid-slider-block .grid-item", {
    xPercent: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".we-believe-section",
      pin: false,
      scrub: 0,
      markers: false,
      start: "top-=300 top",
      end: "bottom-=100 bottom",
    },
  });

  gsap.set(".eligible-caregivers-section .image-content-block .image-block .image-box", { scale: 0.565, xPercent: 114.3, yPercent: -62.5 });
  gsap.to(".eligible-caregivers-section .image-content-block .image-block .image-box", {
    xPercent: 0,
    yPercent: 0,
    scale: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".eligible-caregivers-section",
      pin: false,
      scrub: true,
      markers: false,
      start: "top-=550 top",
      end: "bottom-=100 bottom",
    },
  });

  gsap.set(".compassionate-care-section .service-block3 .image-content-block .image-block .image-box .shape1", { rotation: 90, borderRadius: "117px 4px 4px 4px", top: "-20px", xPercent: 0, yPercent: 0 });
  gsap.to(".compassionate-care-section .service-block3 .image-content-block .image-block .image-box .shape1", {
    rotation: 180,
    borderRadius: "33px 4px 4px 4px",
    xPercent: -25,
    yPercent: 112,
    ease: "none",
    scrollTrigger: {
      trigger: ".eligible-caregivers-section",
      pin: false,
      scrub: true,
      markers: false,
      start: "top-=550 top",
      end: "bottom-=450 bottom",
    },
  });

  gsap.to(".compassionate-care-section .service-block3 .image-content-block .image-block .image-box .heartLogo .logo1", {
    rotation: 266,
    xPercent: 28,
    yPercent: 56,
    width: "178px",
    ease: "none",
    scrollTrigger: {
      trigger: ".eligible-caregivers-section",
      pin: false,
      scrub: true,
      markers: false,
      start: "top-=550 top",
      end: "bottom-=450 bottom",
    },
  });

  gsap.to(".compassionate-care-section .service-block3 .image-content-block .image-block .image-box .heartLogo .logo2", {
    rotation: 135,
    yPercent: 16,
    width: "135px",
    ease: "none",
    scrollTrigger: {
      trigger: ".eligible-caregivers-section",
      pin: false,
      scrub: true,
      markers: false,
      start: "top-=550 top",
      end: "bottom-=450 bottom",
    },
  });

  // gsap.set(".why-clients-choose-section .why-clients-choose-block .clients-choose-grid-block .grid-item", { yPercent: 62.5, opacity: 0.5 });
  // gsap.to(".why-clients-choose-section .why-clients-choose-block .clients-choose-grid-block .grid-item", {
  //   yPercent: 0,
  //   opacity: 1,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".why-clients-choose-section",
  //     pin: false,
  //     scrub: 0,
  //     markers: false,
  //     start: "top-=300 top",
  //     end: "bottom-=100 bottom",
  //   },
  // });

});

var swiper = new Swiper(".locationSwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1299: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1499: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1700: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
  },
});