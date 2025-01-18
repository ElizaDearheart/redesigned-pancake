import "./styles.css";
import "./home.js";
import "./menu.js";
import "./about.js";

console.log("hello");

function Navigate() {
  const page = document.getElementById("content");
  const home = document.getElementById("home");
  const menu = document.getElementById("menu");
  const about = document.getElementById("about");

  document.addEventListener("click", () => {
    if ("click" == home) {
      page = Home();
    } else if ("click" == menu) {
      page = Menu();
    } else if ("click" == about) {
      page = About();
    } else {
      page = Home();
    }
  });
}

Navigate();
