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
// - window.innerHeight / 2

const background_1 = document.querySelector('.background-1')
const background_2 = document.querySelector('.background-2')

const activity = document.querySelector('.activities')
const about = document.querySelector('.about')

window.addEventListener('scroll', event => {
	let currentheight = window.pageYOffset
	let minHeight_1 = activity.getBoundingClientRect().top 
	// let maxHeight_1 = about.getBoundingClientRect().top
	let maxHeight_1 = 3900
console.log(currentheight);
	if (currentheight > minHeight_1 && currentheight < maxHeight_1) {
		// console.log(`условие 1, current: ${currentheight}, min: ${minHeight_1}, max: ${maxHeight_1}`);
		
		background_1.classList.add('visible')
	} else if (currentheight > maxHeight_1) {
		// console.log(`условие 2, current: ${currentheight}, min: ${minHeight_1}, max: ${maxHeight_1}`);
		background_1.classList.remove('visible')
		background_2.classList.add('visible')
	} else {
		// console.log(`условие 3, current: ${currentheight}, min: ${minHeight_1}, max: ${maxHeight_1}`);
		background_2.classList.remove('visible')
		background_1.classList.remove('visible')
	}


})