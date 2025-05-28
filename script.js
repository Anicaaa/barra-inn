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
