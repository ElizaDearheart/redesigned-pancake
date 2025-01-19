import "./styles.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

function clearDiv() {
  let divContent = document.getElementById("content");

  while (divContent.firstChild) {
    divContent.removeChild(divContent.firstChild);
  }
}

function navigate() {
  renderHome();

  document.getElementById("aboutButton").addEventListener("click", () => {
    clearDiv();
    renderAbout();
  });
  document.getElementById("menuButton").addEventListener("click", () => {
    clearDiv();
    renderMenu();
  });
  document.getElementById("homeButton").addEventListener("click", () => {
    clearDiv();
    renderHome();
  });
}

navigate();
