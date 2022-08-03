const swiper = new Swiper('.explore__slider-places', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
	slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
console.log('swiper test');
const backgroundSwiper = new Swiper('.explore__slider-background', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
	slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});