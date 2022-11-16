let navCIcon = document.getElementById("close-icon");
let navOIcon = document.getElementById("open-icon");
let navLinks = document.getElementById("nav-links");
navCIcon.onclick = function () {
	navLinks.classList.toggle("nav-active");
};
navOIcon.onclick = function () {
	navLinks.classList.toggle("nav-active");
};
