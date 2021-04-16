"use strict";

//random number generator
const randomNum = Math.trunc(Math.random() * 20 + 1);

//rules and opening div variables
const ruleCls = document.querySelector(".ruleCls");
const openingDiv = document.querySelector(".openingDiv");

//main section (user input section) variables.
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const guide = document.querySelector(".guide");
const bestScore = document.querySelector(".bestScore");
const currentScore = document.querySelector(".currentScore");

//blur div variables.
const blurDiv = document.querySelector(".blurDiv");

//function to close the opening div with rules
ruleCls.addEventListener("click", function () {
  blurDiv.classList.toggle("visible");
  openingDiv.classList.toggle("visible");
});

//function for the check the guess
check.addEventListener("click", function () {});
