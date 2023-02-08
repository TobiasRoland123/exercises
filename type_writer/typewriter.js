"use strict";

const inputText = document.querySelector("#typewriter");
const inputText2 = document.querySelector("#typewriter2");

let textHTML;
let input = inputText.textContent;
let input2 = inputText2.textContent;
let iteration = -1;
let maxiteration = input.length;
let ranKeyNum;
let typeSpeed;

window.addEventListener("DOMContentLoaded", writeCharacters);

function writeCharacters() {
  textHTML = inputText.innerHTML;

  inputText.textContent = "";

  inputText2.textContent = "";
  addCharacterLoop();
}

function addCharacterLoop() {
  //   console.log(`max iteration is: ${maxiteration}`);
  ranKeyNum = Math.floor(Math.random() * 2) + 1;
  typeSpeed = 200 + Math.floor(Math.random() * 300) + 1;
  //   console.log(typeSpeed);
  iteration++;
  if (iteration < maxiteration) {
    if (textHTML.substring(iteration, iteration + 4) === "<br>") {
      console.log(`there was a linebreak`);

      inputText.innerHTML += "<br>";

      document.querySelector("#typereturn").play();
    } else if (input[iteration] === " ") {
      console.log(`this is a space`);
      document.querySelector("#typespace").play();
      inputText.innerHTML += `${input[iteration]}`;
    } else {
      console.log(ranKeyNum);
      document.querySelector(`#typekey${ranKeyNum}`).play();
      document.querySelector(`#typekey${ranKeyNum}`).currentTime = 0;
      inputText.innerHTML += `${input[iteration]}`;
    }
    // console.log(input[iteration]);
    // inputText.textContent += `${input[iteration]}`;
    setTimeout(addCharacterLoop, typeSpeed);
  } else {
    checkInput2();
  }
}

function checkInput2() {
  if (input2 === "") {
    console.log(`Do nothing`);
    document.querySelector("#typelast").play();
  } else {
    iteration = -1;
    maxiteration = input2.length;
    addCharacterLoop2();
  }
}
function addCharacterLoop2() {
  typeSpeed = 200 + Math.floor(Math.random() * 300) + 1;
  ranKeyNum = Math.floor(Math.random() * 2) + 1;

  iteration++;
  if (iteration < maxiteration) {
    if (input2[iteration] === " ") {
      console.log(`this is a space`);
      document.querySelector("#typespace").play();
      inputText2.innerHTML += `${input2[iteration]}`;
    } else if (textHTML.substring(iteration, iteration + 4) === "<br>") {
      console.log(`there was a linebreak`);

      inputText.innerHTML += "<br>";

      document.querySelector("#typereturn").play();
    } else {
      console.log(ranKeyNum);
      document.querySelector(`#typekey${ranKeyNum}`).play();
      document.querySelector(`#typekey${ranKeyNum}`).currentTime = 0;
      inputText2.innerHTML += `${input2[iteration]}`;
    }
    console.log(input2[iteration]);

    setTimeout(addCharacterLoop2, typeSpeed);
  } else {
    document.querySelector("#typelast").play();
  }
}
