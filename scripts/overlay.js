const openMenu = document.querySelector(".hero__hamburger-menu");
const closeMenu = document.querySelector(".overlay__close");
const overlay = document.querySelector(".overlay");

openMenu.addEventListener("click", () => {
  overlay.classList.toggle('overlay-mobile');
})

closeMenu.addEventListener("click", () => {
  overlay.classList.toggle('overlay-mobile');
} )