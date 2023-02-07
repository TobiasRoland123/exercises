"use strict";

let inputText = document.querySelector("#typewriter");
let input = inputText.textContent;
let iteration = -1;
let maxiteration = inputText.textContent.length;

window.addEventListener("load", writeCharacters);

function writeCharacters() {
  addCharacterLoop();
  inputText.textContent = "";
}

function addCharacterLoop() {
  //   console.log(`max iteration is: ${maxiteration}`);

  iteration++;
  if (iteration < maxiteration) {
    console.log(input[iteration]);
    inputText.textContent += `${input[iteration]}`;
    setTimeout(addCharacterLoop, 100);
  }
}
