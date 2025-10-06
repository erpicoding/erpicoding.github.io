const arrowToTop = document.getElementById("arrowToTop");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
const linkContainer = document.getElementById("linkContainer");

const scratch = document.getElementById("scratch");
const scratchStartRect = scratch.getBoundingClientRect();
if (localStorage.getItem("scratchRecordHeight") == null) {
  localStorage.setItem("scratchRecordHeight", 0);
  localStorage.setItem("scratchTrys", 0);
}
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

scratch.addEventListener("mouseout", () => {
  const scratchRect = scratch.getBoundingClientRect();
  const scratchHeight = Math.abs(scratchRect.top - scratchStartRect.top);
  const scratchRecordHeight = localStorage.getItem("scratchRecordHeight");
  let scratchTrys = localStorage.getItem("scratchTrys");
  scratchTrys++;
  console.log("scratchHeight: " + scratchHeight);

  //Versuche counter
  localStorage.setItem("scratchTrys", scratchTrys);
  trysField.innerHTML = scratchTrys;

  if (scratchHeight > scratchRecordHeight) {
    localStorage.setItem("scratchRecordHeight", scratchHeight);
    console.log("NEUER REKORD");
    recordField.innerHTML = parseInt(scratchHeight);
    newRecord.showModal();
  }
});
