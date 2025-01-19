import tulip from "./images/tulip.jpg";
export { renderAbout };

function renderAbout() {
  //mainContentDiv
  let mainContentDiv;
  mainContentDiv = document.getElementById("content");
  // home page content
  // shared with about page
  let homePageContent;
  homePageContent = document.createElement("div");
  homePageContent.className = "home-page";
  mainContentDiv.appendChild(homePageContent);
  // tulip div
  let tulipDiv = document.createElement("div");
  tulipDiv.className = "tulip-div";
  const tulipImage = document.createElement("img");
  tulipImage.src = tulip;
  tulipDiv.appendChild(tulipImage);
  homePageContent.appendChild(tulipDiv);
  ///////////////////
  // info div
  let infoDiv = document.createElement("div");
  infoDiv.className = "info-div";
  homePageContent.appendChild(infoDiv);
  // infoDiv content
  let aboutOne = document.createElement("p");
  aboutOne.className = "about-one";
  aboutOne.textContent =
    "A restaurant idea born of a desire to create (nearly) limitless options for our favorite food:";
  let aboutTwo = document.createElement("p");
  aboutTwo.className = "about-two";
  aboutTwo.textContent = "Pancakes!";
  infoDiv.appendChild(aboutOne);
  infoDiv.appendChild(aboutTwo);
}
