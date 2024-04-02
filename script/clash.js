// function play() {
//     //hide the home screen
//     // show the playground

//     const home = document.getElementById("home");
//     // console.log(home.classList)
//     home.classList.add('hidden');

//     // show playground
//     const play = document.getElementById("play");
//     play.classList.remove("hidden")

// }

function keyboardUp(event) {
  const playePressed = event.key;
  console.log('player presseed', playePressed);

  // get the expexted to press
  const currentAlphabetElement = document.getElementById("current-alpahbet");
  const currentAlphabet = currentAlphabetElement.innerText.toLocaleLowerCase();
  console.log(playePressed, currentAlphabet);


  // stop the game if player press escaped
  
  if (playePressed === "Escape") {
    gameOver();
  }



  // match or not

  if (playePressed === currentAlphabet) {
    console.log("you get a point", "pressed :", playePressed);

    //----------------------------------------------------------------

    const currentScore = getElementValueById("scoreId");
    // console.log(currentScore);

    const updateScore = currentScore + 1;
    setvalue('scoreId' , updateScore);

    //--------------------------------------------------------------------------------
    // // update score :
    // //get the current score
    // // update the score
    // const scoreId = document.getElementById("scoreId");
    // const scoreIdValue = scoreId.innerText;
    // const scoreIdValueP = parseInt(scoreIdValue);

    // console.log(scoreIdValueP);

    // // new score

    // const newScore = scoreIdValueP + 1;
    // console.log(newScore);

    // // show the score
    // document.getElementById("scoreId").innerText = newScore;

    // start a new round

    removeHighlight(playePressed);

    loopGame();
  } else {
      
      
      
      
      
      
      
      
      
      
      const life = getElementValueById('life');
      const updateLife = life - 1;

      setvalue("life" , updateLife);
      
      
      
      
    if (updateLife === 0) {
      // console.log('game Over');
      gameOver();
      }
      
      
      
      
    //--------------------------------
    // get the current life numbre
    // reduce the life
    // show the life
    // const life = document.getElementById('life');
    // const lifeText = life.innerText;
    // const lifeNumber = parseInt(lifeText);
    // //ruduce life
    // const newlife = lifeNumber - 1;
    // //diaplay life
    // document.getElementById('life').innerText = newlife;
  }

  
}
document.addEventListener("keyup", keyboardUp);

function loopGame() {
  // genarete a random alpahbate
  const alpahbate = randomAlpahbet();
  // console.log(alpahbate);

  // show the rendom alphabate

  const currentAlphabet = document.getElementById("current-alpahbet");
  currentAlphabet.innerText = alpahbate;

  // set key background

  highlight(alpahbate);
}
function play() {
  hide("home");
  hide("score")
  show("play");

  //reset 
  setvalue('life', 5)
  setvalue("scoreId", 0);
  highlight()

  loopGame();
}

function gameOver() {
  hide("play");
  show("score");

  // update final score
  //1. get the final score 
  const lastscore = getElementValueById("scoreId");
  // console.log(lastscore)
  setvalue("lastScore", lastscore);

  //remove the last hightlight

  const alphabet = getTextElementById("current-alpahbet");
  // console.log(alphabet)
    // removeHighlight(current-alpahbet);


    removeHighlight("current-alpahbet");
}