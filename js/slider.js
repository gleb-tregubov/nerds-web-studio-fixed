var controlFirst = document.querySelector("first-control");
var controlSecond = document.querySelector("Second-control");
var controlThird = document.querySelector("Third-control");

var slider = document.querySelector("slider-item");

var sliderFirst = document.querySelector("first-slider");
var sliderSecond = document.querySelector("second-slider");
var sliderThird = document.querySelector("third-slider");

controlFirst.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderSecond.classList.remove("slider-active");
    sliderThird.classList.remove("slider-active");
    sliderFirst.classList.add("slider-active");
});

controlSecond.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderFirst.classList.remove("slider-active");
    sliderThird.classList.remove("slider-active");
    sliderSecond.classList.add("slider-active");
});

controlThird.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderFirst.classList.remove("slider-active");
    sliderSecond.classList.remove("slider-active");
    sliderThird.classList.add("slider-active");
});
