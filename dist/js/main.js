/*******************************************/
/***  ||  Smooth scrolling (jquery)  ||  ***/
/*******************************************/

$("nav a, header a").on("click", function (event) {
	if (this.hash !== "") {
		event.preventDefault();

		const hash = this.hash;

		$("html, body").animate(
			{
				scrollTop: $(hash).offset().top - 60,
			},
			800
		);
	}
});

/****************************************/
/***  ||  Sticky menu background  ||  ***/
/****************************************/
window.addEventListener("scroll", function () {
	if (window.scrollY > 0) {
		document.querySelector(".nav").style.opacity = 0.9;
	} else {
		document.querySelector(".nav").style.opacity = 1;
	}
});

/******************************************/
/***  ||  Refresh after submission  ||  ***/
/******************************************/
const form = document.querySelector(".form");

window.addEventListener("load", function (e) {
	form.reset();
});

/**************************************/
/***  ||  Slide in the mockup   ||  ***/
/**************************************/
const project = document.querySelector(".projects__content");
const images = document.querySelectorAll(".mockup__img img");
const details = document.querySelectorAll(".details");

function content(array) {
	array.forEach((item) => {
		item.style.visibility = "hidden";
	});
}

content(images);
content(details);

window.addEventListener("scroll", function () {
	let posProject = project.getBoundingClientRect().top;
	let posScreen = window.innerHeight / 1.3;

	if (posProject < posScreen) {
		images.forEach((img) => {
			let imgPos = img.getBoundingClientRect().top;

			if (imgPos < posScreen) {
				img.classList.add("slideInLeft");
				img.style.visibility = "visible";
			}
		});

		details.forEach((detail) => {
			let detailPos = detail.getBoundingClientRect().top;

			if (detailPos < posScreen) {
				detail.classList.add("slideInRight");
				detail.style.visibility = "visible";
			}
		});
	}
});

// console.log(window.scrollY);
