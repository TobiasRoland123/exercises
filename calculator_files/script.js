// use strickt makes sure that the datatypes has been declared right
"use strict";

// variables is created
let firstNumber = document.querySelector("#firstnumber");
let secondNumber = document.querySelector("#secondnumber");
let operator = document.querySelector("#operator").value;
let result;
const calculateButton = document.querySelector("#calculate");

const resultListElement = document.querySelector("#results li");
const resultList = document.querySelector("#results");

// waits until page is loaded, and then adds click eventlistener to the calculate button ->
// when the buttton is clicked the function "doMath" is called.
window.addEventListener("load", () => {
  calculateButton.addEventListener("click", doMath);
});

// this function is called when we click the calculate button.
function doMath() {
  console.log("do math has been called");

  //   this if statement makes sure that we can use all the operators
  if (operator === "add") {
    // here the values from the inputfields are converted from strings to numbers and added toghether
    result = Number(firstNumber.value) + Number(secondNumber.value);
  }
  console.log(result);

  //   here the result is put as the new value of the first inpoutfield
  firstNumber.value = result;

  //   The li emelent from the result list is cloned, and then given the value of result ->

  let clone = resultListElement.cloneNode(false);
  clone.textContent = result;
  //   then the copy is put at the end of the list.
  resultList.appendChild(clone);

  // scrolls to the bottom of the result list
  resultList.scrollTop = resultList.scrollHeight;
}
