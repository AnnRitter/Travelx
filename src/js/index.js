// background slider
const backgroundSwiper = new Swiper('.slider-background', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,

	navigation: {
		nextEl: '.slider-background__button-next',
		prevEl: '.slider-background__button-prev',
	},

});

// slider places
const swiper = new Swiper('.slider-places__wrap', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 3,

	navigation: {
		nextEl: '.slider-places__button-next',
		prevEl: '.slider-places__button-prev',
	},

	pagination: {
		el: '.slider-places__pagination',
		type: 'fraction',
		formatFractionCurrent: addZero,
		formatFractionTotal: addZero,
	},
});

function addZero(num) {
	return (num > 9) ? num : '0' + num;
}


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

const triggers = document.querySelectorAll('.header__item')

const background = document.querySelector('.dropdownBackground')

const nav = document.querySelector('.header__navigation')

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))

function handleEnter() {
	this.classList.add('trigger-enter')
	setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)
	background.classList.add('open')

	const dropdown = this.querySelector('.dropdown')

	const dropdownCoords = dropdown.getBoundingClientRect()
	const navCoords = nav.getBoundingClientRect()
	console.log(navCoords);
	const coords = {
		height: dropdownCoords.height,
		width: dropdownCoords.width,
		top: dropdownCoords.top,
		left: dropdownCoords.left,
	}
	console.log(dropdownCoords);
console.log('height: ', coords.height);
console.log('width: ', coords.width);
console.log('top: ', coords.top);
console.log('left: ', coords.left);

	background.style.setProperty('height', `${coords.height}px`)
	background.style.setProperty('width', `${coords.width}px`)
	background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}

function handleLeave() {
	this.classList.remove('trigger-enter', 'trigger-enter-active')
	background.classList.remove('open')
}