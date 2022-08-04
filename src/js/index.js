const swiper = new Swiper('#explore__slider-places', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
	slidesPerView: 3,
	

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	}

});

const backgroundSwiper = new Swiper('#explore__slider-background', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
	slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

});

const activitySwiper = new Swiper('.about__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
	slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: '.activity__button-next',
    prevEl: '.activity__button-prev',
  },

});

console.log('swiper test');