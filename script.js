const arrowToTop = document.getElementById("arrowToTop");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
const linkContainer = document.getElementById("linkContainer");

const scratch = document.getElementById("scratch");
const scratchStartRect = scratch.getBoundingClientRect();
if (localStorage.getItem("scratchRecordHeight") == null) {
  localStorage.setItem("scratchRecordHeight", 0);
  localStorage.setItem("scratchTrysTotal", 0);
  localStorage.setItem("scratchTrys", 0);
}

//get url parameters

const parameters = new URL(window.location.href).searchParams;
const entries = new URLSearchParams(parameters).entries();
const entriesArray = Array.from(entries);

entriesArray.forEach((entry) => {
  let key = entry[0];
  let value = entry[1];

  if (key == "nvs") {
    document.getElementById("nvsProject").removeAttribute("hidden");
  }
  if (key == "lang") {
    setLanguage(value);
  }
});

// translation
//on first visit: Lang: EN
if (localStorage.getItem("lastUsedLang") == null) {
  setLanguage("english");
} else {
  setLanguage(localStorage.getItem("lastUsedLang"));
}

async function setLanguage(language) {
  localStorage.setItem("lastUsedLang", language);

  console.log("start translation");
  let languageData = {};

  fetch("https://erpicoding.github.io/data/languageData.json")
    // fetch("/erpicoding.github.io/data/languageData.json") //local
    .then((res) => res.json())
    .then((data) => {
      languageData = data;
      console.log(languageData);

      //function def start was here
      const langData = languageData[language];

      Object.keys(langData).forEach((key) => {
        const elementGroup = document.querySelectorAll(".translate" + key);

        elementGroup.forEach((element) => {
          element.innerHTML = langData[key];
        });
      });
    });
}

//HA-Modal

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
  let scratchTrysTotal = localStorage.getItem("scratchTrysTotal");
  let scratchTrys = localStorage.getItem("scratchTrys");
  console.log("scratchHeight: " + scratchHeight);

  if (scratchHeight > scratchRecordHeight) {
    localStorage.setItem("scratchRecordHeight", scratchHeight);
    console.log("NEUER REKORD");
    recordField.innerHTML = parseInt(scratchHeight);
    newRecord.showModal();
  } else {
    scratchTrys++;
    localStorage.setItem("scratchTrys", scratchTrys);
  }

  //Versuche counter
  scratchTrysTotal++;
  localStorage.setItem("scratchTrysTotal", scratchTrysTotal);

  trysField.innerHTML = scratchTrys + "/" + scratchTrysTotal;
});
