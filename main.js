`use strict`;

//random number generator
let randomNum = Math.trunc(Math.random() * 20 + 1);
console.log(randomNum);

//score and highcore.
let highScore = 0;
let yourScore = 20;

/**************************************************
 variables for the game begins (excluding popup variables)
 *****************************/
//again btn
const again = document.querySelector(".again");

//gtn class (guess the number);
const gtn = document.querySelector(".gtn");

//system guess variables==>shows number of winning the game
const systemGuess = document.querySelector(".systemGuess");

//main section (user input section) variables.
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const guide = document.querySelector(".guide");
const bestScore = document.querySelector(".bestScore");
const currentScore = document.querySelector(".currentScore");
const body = document.querySelector("body");
/********************************
 * variables for game end here
 * **********************/

/***********************************************
 variables of the all the popups begins
 ************************************************/
//parentCon for controlling communication toggle.
const parentCon = document.querySelector(".parentCon");

//rules and opening div variables
const ruleCls = document.querySelector(".ruleCls");
const openingDiv = document.querySelector(".openingDiv");

//communication variables.
const communication = document.querySelector(".communication");
const footerSec = document.querySelector(".footerSec");
const comClose = document.querySelector(".comClose");

//winner and loser variables
const winner = document.querySelector(".winner");
const winBtn = document.querySelector(".winBtn");
const loser = document.querySelector(".loser");
const loseBtn = document.querySelector(".loseBtn");
const winloseBtn = document.querySelector(".winloseBtn");
const topScore = document.querySelector(".topScore");
const plrScr = document.querySelector(".plrScr");

//blur div variables.
const blurDiv = document.querySelector(".blurDiv");
/************************** 
  popup variables end here
  ************************/

/************************************
 main functions for the game to operate begins
 ****************/

//function for the check the guess
check.addEventListener("click", function () {
  console.log(Number(guess.value));

  if (yourScore < 1) {
    loser.classList.toggle("visible");
    blurDiv.classList.toggle("visible");
    body.style.background = `url("img/loserBackground.png")`;
  } else {
    if (Number(guess.value) !== randomNum) {
      yourScore--;
      currentScore.textContent = yourScore;
      if (Number(guess.value) > 20 || Number(guess.value) < 1) {
        guide.textContent = `number btw 1 & 20`;
      } else {
        Number(guess.value) < randomNum
          ? (guide.textContent = `📉guessed Lower`)
          : (guide.textContent = `📈guessed Higher`);
      }
    } else {
      guide.textContent = `🎉Congratulations!`;
      body.style.background = 'url("img/winnerGreen.png")';
      yourScore > highScore ? (highScore = yourScore) : (highScore = highScore);
      bestScore.textContent = highScore;
      systemGuess.textContent = randomNum;
      gtn.textContent = `🎉Congratulations!`;
    }
  }
});

//refresh function for again btn and click-to-refresh btn in lose div
function refresh() {
  randomNum = Math.trunc(Math.random() * 20 + 1);
  console.log(randomNum);
  guess.value = ``;
  yourScore = 20;
  currentScore.textContent = yourScore;
  guide.textContent = `🤔Guess the Number.`;
  body.style.background = `url("img/backgroundpc.png")`;
  gtn.textContent = `GUESS THE NUMBER`;

  //adding to if statement to control loser popup
  //as of know i am beginner to this the way i know right now i will correct it in future.
  if (
    !blurDiv.classList.contains("visible") &&
    !loser.classList.contains("visible")
  ) {
    blurDiv.classList.add("visible");
    loser.classList.add("visible");
  }
}

//again button function.
again.addEventListener("click", refresh);

/***********************************************
 * game functions end here (excluding popup functions)
 ******************************/

//function to close the opening div with rules
ruleCls.addEventListener("click", function () {
  blurDiv.classList.toggle("visible");
  openingDiv.classList.toggle("visible");
});

//function for click-to-refresh btn in lose div.
loseBtn.addEventListener("click", refresh);

// //footer and communication function;
footerSec.addEventListener("click", function () {
  communication.classList.toggle("visible");
});

//communication close
comClose.addEventListener("click", function () {
  communication.classList.toggle("visible");
  console.log("comCls");
});

parentCon.addEventListener("click", function () {
  if (!communication.classList.contains("visible")) {
    communication.classList.add("visible");
  }
});

//escape function
