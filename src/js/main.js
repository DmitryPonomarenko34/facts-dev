import Swiper from 'swiper/bundle';
import 'simplebar';
import * as functions from './modules/functions.js';

window.onload = function () {
  functions.global();

  const swiperThumb = new Swiper(".gallery__thumb-swiper", {
    simulateTouch: true,
    spaceBetween: 25,
    slidesPerView: 4,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.4,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 4,
        spaceBetween: 25,
      }
    }
  });

  const swiper2 = new Swiper(".gallery__for-swiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    autoHeight: true,
    virtualTranslate: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: true,
    //   stopOnLastSlide: true
    // },
    speed: 1000,
    slidersPerView: 1,
    thumbs: {
      swiper: swiperThumb,
    },
  });


  const ratingSwiper = new Swiper(".rating__swiper", {
    simulateTouch: true,
    spaceBetween: 24,
    slidesPerView: 3,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    autoHeight: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 1.2,
      },
      // when window width is >= 480px
      480: {
        spaceBetween: 10,
        slidesPerView: 1.5,
      },
      630: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      840: {
        spaceBetween: 24,
        slidesPerView: 3,
      },
    }
  });

  const popularSwiper = new Swiper(".popular__swiper", {
    simulateTouch: true,
    spaceBetween: 24,
    slidesPerView: 4,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    autoHeight: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 1.2,
      },
      // when window width is >= 480px
      480: {
        spaceBetween: 10,
        slidesPerView: 1.5,
      },
      630: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      840: {
        spaceBetween: 24,
        slidesPerView: 3,
      },

      1200: {
        spaceBetween: 24,
        slidesPerView: 4,
      }
    }


  });

  const sliderSec = new Swiper(".slider-sec__swiper", {
    simulateTouch: true,
    slidesPerView: 1,
    autoHeight: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 1.1,
        autoHeight: false,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        autoHeight: false,
      },
      630: {
        slidesPerView: 1,
        autoHeight: true,
      },
    }
  });
}
