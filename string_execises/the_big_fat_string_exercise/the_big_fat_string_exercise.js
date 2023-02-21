"use strict";

let inputField = document.querySelector("#inputField");

let outputField = document.querySelector("#outputField");
let outputValue;
let option = Number(document.querySelector("#options").value);
const generateButton = document.querySelector("#generateOutput");

window.addEventListener("load", function () {
  document.querySelector("#generateOutput").addEventListener("mouseover", createOutput);
});

function createOutput() {
  option = Number(document.querySelector("#options").value);
  console.log(option);

  if (option === 0) {
    outputValue = inputField.value[0].toUpperCase() + inputField.value.substring(1);
  } else if (option === 1) {
    outputValue = inputField.value.split(" ")[0];
  } else if (option === 2) {
    outputValue = inputField.value.substring(0, inputField.value.indexOf(" ")).length;
  } else if (option === 3) {
    outputValue = `the middle name wich is ${inputField.value.substring(inputField.value.indexOf(" "), inputField.value.lastIndexOf(" "))}, starts at ${inputField.value.indexOf(" ")} and ends at ${inputField.value.lastIndexOf(" ")}`;
  } else if (option === 4) {
    if (inputField.value.endsWith(".png")) {
      outputValue = `the input is a png file.`;
    } else if (inputField.value.endsWith(".jpg")) {
      outputValue = `the input is a jpg file.`;
    } else {
      outputValue = `the input is neither a png or jpg file`;
    }
  } else if (option === 5) {
    outputValue = "*".repeat(inputField.value.length);
  } else if (option === 6) {
    outputValue = inputField.value.substring(0, 2).toLowerCase() + inputField.value[2].toUpperCase() + inputField.value.substring(3).toLowerCase();
  } else if (option === 7) {
    outputValue = inputField.value
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    outputValue = `${outputValue.substring(0, outputValue.indexOf(" ")).toLowerCase()}${outputValue.substring(outputValue.indexOf(" "))}`;
  }

  console.log(outputValue);

  //   else {
  //     console.log(`option is a: ${option}`);
  //   }
  outputField.value = outputValue;
}

// inputValue = inputField.value;
// console.log(option.value);
// checkInput();

// function checkInput() {
//   if (option.value === 0) {
//     outputValue = inputValue[0].toUpperCase();
//     +inputValue.substring(1);
//     console.log(outputValue);
//     writeOutput();
//   }
// }

// function writeOutput() {
//   outputField.value = outputValue;
// }
