const navToggle = document.querySelector(".nav-trigger");
const links = document.querySelector(".link-uri");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
