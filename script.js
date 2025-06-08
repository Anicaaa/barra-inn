//menu mobile
const toggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");

toggle.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.classList.toggle("active");
});

// Hide mobile menu if window is resized to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove("active");
  }
});

// Home carousel slider
const elem = document.querySelector(".main-carousel");
const flkty = new Flickity(elem, {
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  prevNextButtons: true,
  imagesLoaded: true,
  lazyLoad: true,
  autoPlay: 3000,
  pauseAutoPlayOnHover: true,
  pageDots: false,
});
