var images = document.querySelectorAll(".wrapper .box img");
var lightbox = document.querySelector(".gallery-lightbox");
const galleryImg = document.querySelector(".gallery-inner img");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var btnClose = document.querySelector(".close");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showGallery();
  });
});

function showGallery() {
  lightbox.classList.remove("hide");

  if (currentIndex == 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }

  if (currentIndex == images.length - 1) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }
  galleryImg.src = images[currentIndex].src;
}

btnClose.addEventListener("click", () => {
  lightbox.classList.add("hide");
});

next.addEventListener("click", () => {
  if (currentIndex == images.length - 1) {
    currentIndex == 0;
  } else {
    currentIndex++;
  }
  showGallery();
});

prev.addEventListener("click", () => {
  currentIndex != 0 ? currentIndex-- : currentIndex == images.length - 1;
  showGallery();
});
