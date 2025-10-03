const arrowToTop = document.getElementById("arrowToTop");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
const linkContainer = document.getElementById("linkContainer");

// const ha = document.getElementById("ha");
// if (localStorage.getItem("openHA") == null) {
//   ha.showModal();
//   localStorage.setItem("openHA", true);
// } else {
//   ha.close();
// }

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;
  const bodyHeight = body.getBoundingClientRect().height;
  console.log(bodyHeight);
  console.log(scrollHeight);

  if (scrollHeight > navbarHeight) {
    navbar.classList.add("navbarFixed");
    if (navbar.classList.length == 3) {
      navbarToggle();
    }
  } else {
    navbar.classList.remove("navbarFixed");
    if (navbar.classList.length == 2) {
      navbarToggle();
    }
  }

  if (scrollHeight >= bodyHeight) {
    body.classList.add("footerFixed");
  } else {
    body.classList.remove("footerFixed");
  }
});

function navbarToggle() {
  linkContainer.classList.toggle("showLinks");
  navbar.classList.toggle("showLinks");
}
