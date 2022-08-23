const backgroundSwiper = new Swiper('.explore__slider-background', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,

	navigation: {
		nextEl: '.explore__button-next',
		prevEl: '.explore__button-prev',
	},

});

function addZero(num) {
	return (num > 9) ? num : '0' + num;
}

const swiper = new Swiper('.explore__slider-places', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 3,

	navigation: {
		nextEl: '.explore__places-button-next',
		prevEl: '.explore__places-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		formatFractionCurrent: addZero,
		formatFractionTotal: addZero,


		// renderFraction: function (index, className) {
		// const current = document.querySelector('.swiper-pagination-current')
		// 	console.log(current);
		// 	return '<span class="' + className + '">' + (menu[index]) + '</span>';
		// }
	},


});

const activitySwiper = new Swiper('.activities__slider', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 4,

	navigation: {
		nextEl: '.activities__button-next',
		prevEl: '.activities__button-prev',
	},

});

// change background
const background_1 = document.querySelector('.background-1')
const background_2 = document.querySelector('.background-2')

const activity = document.querySelector('.activities')
const about = document.querySelector('.about')

window.addEventListener('scroll', event => {
	let currentheight = window.pageYOffset
	let minHeight_1 = activity.getBoundingClientRect().top
	// let maxHeight_1 = about.getBoundingClientRect().top
	let maxHeight_1 = 3900
	// console.log(currentheight);
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

//change photos in list 
const titles = document.querySelectorAll('.about__character')
const photos = document.querySelectorAll('.about__item-photo')

titles.forEach(title => {
	title.addEventListener('click', changePhoto)
})

function changePhoto(event) {

	photos.forEach(photo => {
		photo.classList.remove('show')
	})

	const currentPhoto = document.querySelector(`[data-id="${event.target.dataset.id}"`)
	currentPhoto.classList.add('show')

}

document.querySelector('.about__character').click()

//toggle submenu 

window.addEventListener('click', toggleMenu)

function toggleMenu(e) {

	if (e.target.classList.contains('hotels__info')) {
		const targetSubmenu = e.target.nextElementSibling
		targetSubmenu.classList.add('active')
	}

	if (e.target.classList.contains('hotels__subitem')) {
		const submenu = e.target.closest('.hotels__submenu')
		submenu.classList.remove('active')

		const info = submenu.previousElementSibling
		const content = e.target.textContent
		info.textContent = content
		console.log(info);
	} 
	if (!e.target.classList.contains('hotels__info') || e.target.classList.contains('hotels__subitem')) {
		const items = document.querySelectorAll('.hotels__submenu')
		.forEach(item => {
			item.classList.remove('active')
		})
	}


}