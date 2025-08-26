const arrowToTop = document.getElementById("arrowToTop");
const navbar = document.querySelector(".navbar");
const linkContainer = document.getElementById("linkContainer");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navbarHeight) {
    navbar.classList.add("navbarFixed");
  } else {
    navbar.classList.remove("navbarFixed");
  }
});

function navbarToggle() {
  linkContainer.classList.toggle("showLinks");
  navbar.classList.toggle("showLinks");
}

selectLanguage(3);
function selectLanguage(languageId) {
  for (let i = 1; i <= 4; i++) {
    document.getElementById("select" + i).style.flexGrow = "1";
    document.getElementById("select" + i).style.fontSize = "15px";
    document.getElementById("select" + i).style.fontWeight = "400";
  }
  document.getElementById("select" + languageId).style.flexGrow = "10";
  document.getElementById("select" + languageId).style.fontSize = "20px";
  document.getElementById("select" + languageId).style.fontWeight = "700";

  if (languageId == 1) {
    //html
    document.getElementById("languageLogo").src = "html.webp";
    document.getElementById("languageText").innerHTML =
      "HTML (Hypertext Markup Language) bildet die Grundlage jeder Website. Es strukturiert Inhalte wie Texte, Bilder, Videos und Links in einer klaren, lesbaren Form für Browser. Durch eine saubere HTML-Struktur wird sichergestellt, dass Webseiten für Suchmaschinen optimiert sind und auf allen Geräten korrekt dargestellt werden. Eine gut organisierte HTML-Basis ist entscheidend für Performance, Barrierefreiheit und die spätere Erweiterbarkeit einer Website.<br><br>Diese website benutzt auch HTML.";
    document.getElementById("languageLogoSource").innerHTML =
      "https://commons.wikimedia.org/wiki/File:HTML5_logo_and_wordmark.svg";
  } else if (languageId == 2) {
    //css
    document.getElementById("languageLogo").src = "./CSS_logo.svg";
    document.getElementById("languageText").innerHTML =
      "CSS (Cascading Style Sheets) sorgt für das visuelle Erscheinungsbild einer Website. Es ermöglicht individuelle Designs, ansprechende Layouts und optimierte Darstellungen für verschiedene Bildschirmgrößen. Mit modernen CSS-Techniken wie Flexbox oder Grid können responsive Webseiten entwickelt werden, die auf Smartphones, Tablets und Desktops gleichermaßen gut aussehen. Eine durchdachte Gestaltung steigert die Benutzerfreundlichkeit und stärkt die Markenidentität.<br><br>Diese website benutzt auch CSS.";
    document.getElementById("languageLogoSource").innerHTML =
      "https://commons.wikimedia.org/wiki/File:CSS3_logo.svg";
  } else if (languageId == 3) {
    //javascript
    document.getElementById("languageLogo").src = "./js_logo.svg";
    document.getElementById("languageText").innerHTML =
      "JavaScript bringt Interaktivität und Dynamik in Websites. Es ermöglicht Funktionen wie Animationen, interaktive Formulare, Echtzeit-Datenaktualisierungen und vieles mehr. Durch die Integration von JavaScript entstehen reaktionsschnelle Webanwendungen, die ein besseres Nutzererlebnis bieten. Zudem ermöglicht es die Umsetzung komplexer Funktionen direkt im Browser, ohne zusätzliche Ladezeiten.<br><br>Diese website benutzt auch Javascript.";
    document.getElementById("languageLogoSource").innerHTML =
      "https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg";
  } else if (languageId == 4) {
    //node
    document.getElementById("languageLogo").src = "./node_logo.svg";
    document.getElementById("languageText").innerHTML =
      "Node.js ist eine serverseitige JavaScript-Laufzeitumgebung, die schnelle und skalierbare Webanwendungen ermöglicht. Dank seiner effizienten Architektur eignet sich Node.js ideal für Echtzeitanwendungen, wie Chats oder Online-Tools. Es sorgt für kurze Reaktionszeiten, hohe Performance und eine nahtlose Verbindung zwischen Frontend und Backend. Damit wird eine moderne, zukunftssichere Weblösung geschaffen.";
    document.getElementById("languageLogoSource").innerHTML =
      "https://commons.wikimedia.org/wiki/File:Node.js_logo.svg";
  }
}
