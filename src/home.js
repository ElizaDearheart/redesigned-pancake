import tulip from "./images/tulip.jpg";

function Home() {
  //mainContentDiv
  let mainContentDiv;
  mainContentDiv = document.getElementById("content");
  // home page content
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
  // info div
  let infoDiv = document.createElement("div");
  infoDiv.className = "info-div";
  homePageContent.appendChild(infoDiv);
  // infoDiv content
  let textOne = document.createElement("p");
  textOne.className = "text-one";
  textOne.textContent = "Each plate made to your exact specifications.";
  let textTwo = document.createElement("p");
  textTwo.className = "text-two";
  textTwo.textContent =
    "A canvas waiting to be filled with your dream breakfast...";
  infoDiv.appendChild(textOne);
  infoDiv.appendChild(textTwo);
  // infoDiv form element
  let signupForm = document.createElement("form");
  signupForm.className = "sign-up";
  infoDiv.appendChild(signupForm);

  let newEmail = document.createElement("input");
  newEmail.type = "email";
  newEmail.name = "newEmail";
  newEmail.id = "newEmail";
  newEmail.placeholder = "Enter your email here...";

  let newEmailLabel = document.createElement("label");
  newEmailLabel.textContent = "Sign up to receive news and offers:";

  signupForm.appendChild(newEmailLabel);
  signupForm.appendChild(newEmail);

  const newLineBreak = document.createElement("br");
  signupForm.appendChild(newLineBreak);

  let submitButton = document.createElement("button");
  submitButton.className = "submit";
  submitButton.textContent = "Submit";
  signupForm.appendChild(submitButton);
}

Home();

//TODO:
// - add email validation
// - add submit function
