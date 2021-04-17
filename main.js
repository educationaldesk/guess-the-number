"use strict";

//random number generator
const randomNum = Math.trunc(Math.random() * 20 + 1);
console.log(randomNum);

//score and highcore.
let highScore = 0;
let yourScore = 20;

//rules and opening div variables
const ruleCls = document.querySelector(".ruleCls");
const openingDiv = document.querySelector(".openingDiv");

//blur div variables.
const blurDiv = document.querySelector(".blurDiv");

//popup variables
const loser = document.querySelector(".loser");
const loseBtn = document.querySelector(".loseBtn");

//communication variables.
const communication = document.querySelector(".communication");
const footerSec = document.querySelector(".footerSec");
const comCls = document.querySelector(".comCls");

//main section (user input section) variables.
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const guide = document.querySelector(".guide");
const bestScore = document.querySelector(".bestScore");
const currentScore = document.querySelector(".currentScore");
const body = document.querySelector("body");

//function to close the opening div with rules
ruleCls.addEventListener("click", function () {
  blurDiv.classList.toggle("visible");
  openingDiv.classList.toggle("visible");
});

//function for the check the guess
check.addEventListener("click", function () {
  console.log(Number(guess.value));

  if (yourScore < 1) {
    loser.classList.toggle("visible");
    blurDiv.classList.toggle("visible");
    body.style.background = `url("img/loserBackground.png")`;
  } else {
    if (Number(guess.value) !== randomNum) {
      currentScore.textContent = yourScore;
      yourScore--;
      if (Number(guess.value) > 20 || Number(guess.value) < 1) {
        guide.textContent = `nunber btw 1 & 20`;
      } else {
        Number(guess.value) < randomNum
          ? (guide.textContent = `📉guessed Lower`)
          : (guide.textContent = `📈guessed Higher`);
      }
    } else {
      guide.textContent = `🎉Congratulations!`;
      body.style.background = 'url("img/winnerGreen.png")';
      if (yourScore > highScore) {
        highScore = yourScore;
        bestScore.textContent = highScore;
      }
    }
  }
});

// //footer and communication function;
footerSec.addEventListener("click", function () {
  communication.classList.toggle("visible");
});
