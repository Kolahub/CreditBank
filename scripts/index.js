const navBtn = document.getElementById("nav-btn");
const navi = document.querySelector(".navi");
const firstStroke = document.querySelector(".first-stroke");
const secondStroke = document.querySelector(".second-stroke");

navBtn.addEventListener("click", function () {
  firstStroke.classList.toggle("active");
  secondStroke.classList.toggle("active");
  navi.classList.toggle("full");
});