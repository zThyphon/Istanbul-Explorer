const slides = document.querySelectorAll(".slide");
const nextSlideButton = document.querySelector(".nextSlide");
const previousSlideButton = document.querySelector(".previousSlide");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) 
    {
      slide.style.display = "block";
    } 
    else 
    {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) 
  {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function previousSlide() 
{
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function autoAdvance() {
  setInterval(() => 
  {
    nextSlide();
  }, 8000);
}

nextSlideButton.addEventListener("click", nextSlide);
previousSlideButton.addEventListener("click", previousSlide);

showSlide(currentSlide);
autoAdvance();