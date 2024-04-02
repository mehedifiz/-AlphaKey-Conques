function hide(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function show(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function highlight(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeHighlight(elementId) {
  const element = document.getElementById(elementId);

  element.classList.remove("bg-orange-400");
}

function randomAlpahbet() {
  const alpahbatStrings = "abcdefghijklmnopqrstuvwxyz";
  const alpahbats = alpahbatStrings.split("");

  // get a random index
  const randomNumber = Math.random() * 25;
  const randomIndex = Math.floor(randomNumber);

  const alpahbate = alpahbats[randomIndex];
  // console.log(randomIndex, alpahbate);
  return alpahbate;
}

// // Example usage
// randomAlpahbet();

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setvalue(elementId , value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}



function getTextElementById(elementId) {
  
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}



