"use strict";

//////////////////// Variables
let counter = 1;
const modal = document.querySelector(".modal");
const closeModal = document.querySelectorAll(".modal__close");
const overlay = document.querySelector(".overlay");
const emergencyBtnCont = document.querySelector(
	".section__info04--btn-wrapper"
);
let emergencyBtn = document.querySelectorAll(".btn04");

/////////////////// Emergency button

emergencyBtnCont.addEventListener("click", function (e) {
	const clicked = e.target.closest(".btn04");
	console.log("clicked");

	if (!clicked) return;

	closeModal.forEach(function (e) {
		e.addEventListener("click", function () {
			document
				.querySelector(`.modal__${clicked.dataset.btn}`)
				.classList.remove("modal__active");
			overlay.classList.remove("overlay__active");
		});
	});

	document
		.querySelector(`.modal__${clicked.dataset.btn}`)
		.classList.add("modal__active");

	overlay.classList.add("overlay__active");
});
