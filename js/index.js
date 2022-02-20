document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("div");
  const navMenu = document.querySelector(".menu");
  console.log(document.querySelector("div"));

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
});
