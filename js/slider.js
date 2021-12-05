"use strict";

let counter = 1;

/////////////////// Slider Functionality
setInterval(function () {
	let slideBtn = document.getElementById("radio" + counter);
	//   Checks the checkbox
	slideBtn.checked = true;
	counter++;
	if (counter > 4) {
		counter = 1;
	}
}, 2500);
