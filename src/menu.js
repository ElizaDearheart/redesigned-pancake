export { renderMenu };

function renderMenu() {
  //mainContentDiv
  let mainContentDiv;
  mainContentDiv = document.getElementById("content");
  //menu page content
  let menuPageContent;
  menuPageContent = document.createElement("div");
  menuPageContent.className = "menu-page";
  mainContentDiv.appendChild(menuPageContent);
  //pancake menu
  let pancakeMenu = document.createElement("div");
  pancakeMenu.className = "menu";
  menuPageContent.appendChild(pancakeMenu);
  //pancake menu content
  let pancakes = document.createElement("h1");
  pancakes.textContent = "Pick your pancake base:";
  let pancakeOptions = document.createElement("h3");
  pancakeOptions.textContent = "Buttermilk\n~\nSourdough\n~\nBuckwheat";
  let pancakePrice = document.createElement("h4");
  pancakePrice.textContent =
    "One pancake: $5.95\nTwo pancakes: $7.95\nThree pancakes: $9.95\n~\nAdditional pancake: $2.00";
  pancakeMenu.appendChild(pancakes);
  pancakeMenu.appendChild(pancakeOptions);
  pancakeMenu.appendChild(pancakePrice);
  //filling menu
  let fillingMenu = document.createElement("div");
  fillingMenu.className = "menu";
  menuPageContent.appendChild(fillingMenu);
  //fillings menu content
  let fillings = document.createElement("h1");
  fillings.textContent = "Pick your filling:";
  let fillingsOptions = document.createElement("h3");
  fillingsOptions.textContent =
    "Cinnamon Apple\n~\nStrawberry\n~\nPeanut Butter";
  let fillingPrice = document.createElement("h4");
  fillingPrice.textContent = "One filling: $2.95\n~\nAdditional filling: $2.00";
  fillingMenu.appendChild(fillings);
  fillingMenu.appendChild(fillingsOptions);
  fillingMenu.appendChild(fillingPrice);
  //topping menu
  let toppingMenu = document.createElement("div");
  toppingMenu.className = "menu";
  menuPageContent.appendChild(toppingMenu);
  //topping menu content
  let toppings = document.createElement("h1");
  toppings.textContent = "Pick your toppings:";
  let toppingOptions = document.createElement("h3");
  toppingOptions.textContent =
    "Maple Syrup\n~\nStrawberry Sauce\n~\nChocolate Sauce";
  let toppingPrice = document.createElement("h4");
  toppingPrice.textContent =
    "One topping: $2.95\n~\nAdditional topping: $2.00\n~\nWhipped Cream: Free!";
  toppingMenu.appendChild(toppings);
  toppingMenu.appendChild(toppingOptions);
  toppingMenu.appendChild(toppingPrice);
}
