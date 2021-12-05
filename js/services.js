"use strict";

//////////////////// Variables
const sidebarCont = document.querySelector(".section__services--sidebar");
const overlay = document.querySelectorAll(".section__services--overlay");

/////////////////// Services Overlay Functionality

sidebarCont.addEventListener("click", function (e) {
	const clicked = e.target.closest(".sidebar__btn");
	// console.log("CLICKED");
	if (!clicked) return;
	overlay.forEach((e) =>
		e.classList.remove("section__services--overlay-active")
	);

	document
		.querySelector(`.section__services--overlay--${clicked.dataset.btn}`)
		.classList.add("section__services--overlay-active");
});
