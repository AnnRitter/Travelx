const backgroundSwiper = new Swiper('.explore__slider-background', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
	slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.explore__button-next',
    prevEl: '.explore__button-prev',
  },

});

const swiper = new Swiper('.explore__slider-places', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
	slidesPerView: 3,
	

  // Navigation arrows
  navigation: {
    nextEl: '.explore__places-button-next',
    prevEl: '.explore__places-button-prev',
  },
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	}

});



const activitySwiper = new Swiper('.activities__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
	slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: '.activities__button-next',
    prevEl: '.activities__button-prev',
  },

});

const background_1 = document.querySelector('.background-1')
const background_2 = document.querySelector('.background-2')
const minHeight_1 = 1000
const maxheight_1 = 3240
// const maxheight_2 = 
window.addEventListener('scroll', event => {
	let currentheight = window.pageYOffset
	
	if (currentheight > minHeight_1 && currentheight < maxheight_1) {
		console.log('условие 1');
		background_1.classList.add('visible')
	} else if (currentheight > maxheight_1) {
		console.log('условие 2');
		background_1.classList.remove('visible')
		background_2.classList.add('visible')
	} else {
		console.log('условие 3');
		background_2.classList.remove('visible')
	}

	
})