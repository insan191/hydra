// scroll

const nav = document.querySelector(".js-nav")

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		nav.classList.add("is-scroll")
	} else {
		nav.classList.remove("is-scroll")
	}
}

//menu
let menuBtn = document.querySelector(".js-menu-btn")
let menuLink = document.querySelectorAll(".js-menu-link")
let menu = document.querySelector(".js-menu")

menuBtn.addEventListener("click", () => {
	menu.classList.toggle("is-active")
	menuBtn.classList.toggle("is-active")
})
Array.from(menuLink).map(item =>
	item.addEventListener("click", () => {
		menu.classList.remove("is-active")
		menuBtn.classList.remove("is-active")
	})
)

// swiper
const mySwiper = document.querySelectorAll(".js-swiper")
const wrapper = document.querySelectorAll(".js-swiper__items")
const slide = document.querySelectorAll(".js-swiper__item")

function addSlider() {
	Array.from(mySwiper).map(item => item.classList.add("mySwiper", "swiper"))
	Array.from(wrapper).map(item => item.classList.add("swiper-wrapper"))
	Array.from(slide).map(item => item.classList.add("swiper-slide"))
	const swiper = new Swiper(".mySwiper", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	})
}

function removeSlider() {
	Array.from(slide).map(item => item.classList.remove("swiper", "mySwiper"))
	Array.from(slide).map(item => item.classList.remove("swiper-wrapper"))
	Array.from(slide).map(item => item.classList.remove("swiper-slide"))
}

const isMobile =
	/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
	document.documentElement.clientWidth <= 1330 ||
	window.innerWidth <= 1330

function toggleSlider() {
	if (isMobile) {
		addSlider()
	} else {
		removeSlider()
	}
}

window.addEventListener("load", () => {
	toggleSlider()
})
window.addEventListener("resize", () => {
	toggleSlider()
})
window.addEventListener("scroll", () => {
	scrollFunction()
})
