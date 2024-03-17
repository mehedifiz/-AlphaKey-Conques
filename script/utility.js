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
    element.classList.add('bg-orange-400')

}

function removeHighlight(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}








function randomAlpahbet() {
  const alpahbatStrings = "abcdefghijklmnopqrstuvwxyz";
  const alpahbats = alpahbatStrings.split("");

  // get a random index
  const randomNumber = Math.random() * 25;
  const randomIndex = Math.round(randomNumber);

  const alpahbate = alpahbats[randomIndex];
    console.log(randomIndex, alpahbate);
    return alpahbate;
}

// // Example usage
// randomAlpahbet();
