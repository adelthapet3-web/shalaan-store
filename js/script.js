const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});