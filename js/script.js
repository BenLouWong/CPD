"use strict";

//////////////////// Variables
const scrollToTopBtn = document.querySelector(".btn03");
const sidebarBtn = document.querySelectorAll(".sidebar__btn");
const target = document.querySelector(".target");
const serviceSection = document.getElementById("section--2");
const rootElement = document.documentElement;
const footer = document.querySelectorAll(".footer");
const closeContact = document.querySelector(".contact__close");
const openContact = document.querySelector(".contact");
const btnContact02 = document.querySelector(".contactBtn");
const collapsible = document.querySelectorAll(".collapsible");
const collapsibleContent = document.querySelectorAll(".collapsible__content");
const header = document.querySelector(".nav");

/////////////////// Render Header

const renderHeader = function () {
	let headerHtml = ` <img
    src="icons/CPD logo 1.png"
    alt="Surgery Logo"
    class="logo logo__nav--img"
/>
<ul class="nav__list flex flex__ai-center">
    <li class="nav__item">
        <a href="index.html" class="nav__item--link">Home</a>
    </li>
    <li class="nav__item">
        <a href="team.html" class="nav__item--link"
            >Meet The Team</a
        >
    </li>
    <li class="nav__item">
        <a href="services.html" class="nav__item--link"
            >Services</a
        >
    </li>
    <li class="nav__item">
        <a href="info.html" class="nav__item--link"
            >New Patients</a
        >
    </li>
    <li class="nav__item">
        <a href="faq.html" class="nav__item--link">FAQ</a>
    </li>
    <li class="nav__item nav__contact">
						
						<button class="btn btn__01 btn__Contact">
							Contact Us
						</button>
					</li>
				</ul>`;
	header.insertAdjacentHTML("afterbegin", headerHtml);
};
renderHeader();

/////////////////// Collapsible

collapsible.forEach(function (e) {
	e.addEventListener("click", () => {
		e.classList.toggle("collapsible__active");
		e.nextElementSibling.classList.toggle("collapsible__content--active");
	});
});

/////////////////// Render Footer

const renderFooter = function () {
	footer.forEach(function (e) {
		let footerHtml = `<div class="section__footer flex flex__ai-center flex__jc-center" id="footer">
        <div
            class="
                section__footer--column
                flex flex__ai-center flex__jc-center
            "
        >
            <img
                src="icons/CPD logo 1.png"
                alt="Surgery Logo"
                class="logo__img"
            />
        </div>
        <div class="section__footer--links">
            <div class="link__cont flex flex__ai-center flex__jc-center">
                <a href="https://www.calvarycare.org.au/john-james-private-hospital-canberra/" class="section__footer--link">Calvary Hospitals</a>
                <a href="https://www.calvarycare.org.au/john-james-private-hospital-canberra/" class="section__footer--link">ACT Anaesthesia</a>
            </div>
            <div class="link__cont flex flex__ai-center flex__jc-center">
                <a href="https://www.calvarycare.org.au/john-james-private-hospital-canberra/"    class="section__footer--link">Anaesthetic Consultants</a>
            <a href="https://www.calvarycare.org.au/john-james-private-hospital-canberra/" class="section__footer--link">American Academy of Paediatric Dentistry</a>
            </div>
            <div class="link__cont flex flex__ai-center flex__jc-center">
                <a href="https://www.calvarycare.org.au/john-james-private-hospital-canberra/" class="section__footer--link">Australian Academy of Paediatric Dentistry</a>
                <a href="https://www.calvarycare.org.au/john-james-private-hospital-canberra/" class="section__footer--link">International Association of Paediatric Dentistry</a>
            </div>
            <a href="International Association of Paediatric Dentistry" class="section__footer--link">Australian Dental Association</a>
        </div>
    </div>
    <div class="footer__credits">
        Icons made by
           <a
               href="https://www.flaticon.com/authors/smashicons"
               title="Smashicons"
               >Smashicons</a
           >, <a href="https://www.flaticon.com/authors/bsd" title="bsd">bsd and <a href="https://www.freepik.com" title="Freepik">Freepik</a>
           from
           <a href="https://www.flaticon.com/" title="Flaticon"
               >www.flaticon.com</a
           >
    </div>`;
		e.innerHTML = footerHtml;
	});
};
renderFooter();

/////////////////// Scroll to Top Button Detecting position
// 3. Call back function - Gets called each time the target element intersects with the root element at the threshold defined
const observer = function (entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			scrollToTopBtn.classList.add("showBtn");
		} else {
			scrollToTopBtn.classList.remove("showBtn");
		}
	});
};
// 1. const observer = new IntersectionObserver(obsCallback, obsOptions)
const btnObserver = new IntersectionObserver(observer, {
	root: null,
	threshold: 0,
});
// 2. Create observer function:
btnObserver.observe(target);

/////////////////// Scroll to Top Button Functionality
scrollToTopBtn.addEventListener("click", function () {
	rootElement.scrollIntoView({ behavior: "smooth" });
});

const contact = function () {
	const btnContact = document.querySelector(".btn__Contact");

	btnContact.addEventListener("click", () =>
		openContact.classList.add("contact__active")
	);
	closeContact.addEventListener("click", () =>
		openContact.classList.remove("contact__active")
	);
	btnContact02.addEventListener("click", () =>
		openContact.classList.add("contact__active")
	);
};
contact();
