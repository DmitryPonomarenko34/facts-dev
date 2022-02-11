import Swiper from 'swiper/bundle';
import 'simplebar';
import * as functions from './modules/functions.js';

window.onload = function () {
  functions.global();

  const swiperThumb = new Swiper(".gallery__thumb-swiper", {
    simulateTouch: true,
    spaceBetween: 25,
    slidesPerView: 4,
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
    // },
    speed: 1300,
    slidersPerView: 1,
    thumbs: {
      swiper: swiperThumb,
    },
  });
}