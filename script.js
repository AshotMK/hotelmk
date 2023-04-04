$(".hh1").hide();
$(".hh1").fadeIn(1000)


const myImage = document.getElementById("myImage");
const box = document.getElementById("apertments");

window.addEventListener("scroll", () => {
  const { top, bottom } = myImage.getBoundingClientRect();
  const screenHeight = window.innerHeight;
  if (top < screenHeight && bottom > 0) {
    myImage.style.opacity = 1;
    box.style.opacity = 1;
  } else {
    myImage.style.opacity = 0;
    box.style.opacity = 0;
  }
});

window.addEventListener("scroll", () => {
  const { top, bottom } = box.getBoundingClientRect();
  const screenHeight = window.innerHeight;
  if (top < screenHeight && bottom > 0) {
    box.style.opacity = 1;
  } else {
    box.style.opacity = 0;
  }
});