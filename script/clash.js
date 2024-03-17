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

function loopGame() {
    // genarete a random alpahbate
    const alpahbate = randomAlpahbet();
    console.log(alpahbate);

    // show the rendom alphabate

    const currentAlphabet = document.getElementById("current-alpahbet");
    currentAlphabet.innerText = alpahbate;


    // set bg

    highlight(alpahbate);
    
}
 function play() {
     hide("home");
     show("play");
     loopGame() ; 
}
 
