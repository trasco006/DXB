import { Swiper } from './vendor/swiper';

var swiper = new Swiper(".swiper", {
  spaceBetween: 44,
  slidesPerView: 'auto',
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 17
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 24
    }
  }
});
