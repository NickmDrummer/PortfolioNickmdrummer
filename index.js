// funcion que toma y cambia el año actual en el footer
document.addEventListener("DOMContentLoaded", function () {
  const year = document.querySelector("#year");

  function date() {
    year.innerHTML = new Date().getFullYear();
  }

  date();
});

//* Switch para cambiar el tema de la pagina

const bodyBox = document.querySelector("body");
const navbar = document.querySelector("nav");
const introChild = document.querySelector("#introChild");
const switchTheme = document.querySelector("#switch-theme");
const links = document.querySelectorAll("#link");
const btnHeader = document.querySelectorAll(".btn-gradLight");
const divCardBody = document.querySelectorAll(".card-body");
const btnDown = document.querySelectorAll("#btn-floating-light");
const btnGitHubFooter = document.querySelectorAll(".btn-gradDark");

switchTheme.addEventListener("change", () => {
  if (switchTheme.checked) {
    bodyBox.classList.remove("bgColorLight");
    bodyBox.classList.add("bgColorDark");
    navbar.classList.remove("blurBackgrounLight");
    navbar.classList.add("blurBackgrounDark");
    links.forEach((link) => {
      link.classList.remove("text-black");
      link.classList.add("text-white");
    });
    introChild.classList.remove("maskLight");
    introChild.classList.add("maskDark");
    btnHeader.forEach((btn) => {
      btn.classList.remove("btn-gradLight");
      btn.classList.add("btn-gradIndigo");
    });
    divCardBody.forEach((div) => {
      div.classList.add("bgCardDark");
    });
    btnDown.forEach((btn) => {
      btn.classList.add("btn-gradIndigo");
    });
    btnGitHubFooter.forEach((btn) => {
      btn.classList.remove("btn-gradDark");
      btn.classList.add("btn-gradIndigo");
    });
  } else {
    bodyBox.classList.remove("bgColorDark");
    bodyBox.classList.add("bgColorLight");
    navbar.classList.remove("blurBackgrounDark");
    navbar.classList.add("blurBackgrounLight");
    links.forEach((link) => {
      link.classList.remove("text-light");
      link.classList.add("text-black");
    });
    introChild.classList.remove("maskDark");
    introChild.classList.add("maskLight");
    btnHeader.forEach((btn) => {
      btn.classList.remove("btn-gradIndigo");
      btn.classList.add("btn-gradLight");
    });
    divCardBody.forEach((div) => {
      div.classList.remove("bgCardDark");
    });
    btnDown.forEach((btn) => {
      btn.classList.remove("btn-gradIndigo");
    });
    btnGitHubFooter.forEach((btn) => {
      btn.classList.remove("btn-gradIndigo");
      btn.classList.add("btn-gradDark");
    });
  }
});
