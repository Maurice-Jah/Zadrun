let arrowRight = document.getElementById("right");
let arrowLeft = document.getElementById("left");

arrowLeft.addEventListener("click", function () {
  document.getElementById("slider-wrapper").scrollLeft -= 180;
});

arrowRight.addEventListener("click", function () {
  document.getElementById("slider-wrapper").scrollLeft += 180;
});
