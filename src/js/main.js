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
  });
}