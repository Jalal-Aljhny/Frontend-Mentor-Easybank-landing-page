let menuIcon = document.querySelector("header .container .close-icon");
let menu = document.querySelector("header .container ul");
let iconMode = "open";

menuIcon.addEventListener("click", () => {
  if (iconMode == "open") {
    menu.style.display = "inherit";
    menuIcon.src = "images/icon-close.svg";
    iconMode = "close";
  } else {
    menu.style.display = "none";
    menuIcon.src = "images/icon-hamburger.svg";
    iconMode = "open";
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
