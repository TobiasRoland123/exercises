"use strict";

let option = document.querySelector("#options").value;
const button = document.querySelector("#dostuff");

window.addEventListener("DOMContentLoaded", () => {
  button.addEventListener("click", doIt);
});

function doIt() {
  console.clear();
  option = Number(document.querySelector("#options").value);

  if (option === 1) {
    // ************** writes from 0 - 9 in the console.   ***************
    for (let counter = 0; counter < 10; counter++) {
      console.log(counter);
    }
  } else if (option === 2) {
    //  ****************  writes from 1-11 in the console.***************
    for (let counter = 1; counter < 12; counter++) {
      console.log(counter);
    }
  } else if (option === 3) {
    // *************** writes from 1-11 in the console but when counter hits -1 it console.logs "liftoff". ***************
    for (let counter = 10; counter >= -1; counter--) {
      if (counter > -1) {
        console.log(counter);
      } else {
        console.log("liftoff");
      }
    }
  } else if (option === 4) {
    // *************** console logs every odd number bwtween 1 and 19 including 1 and 19. ***************
    for (let counter = 1; counter <= 19; counter += 2) {
      console.log(counter);
    }
  } else if (option === 5) {
    // *************** doubles the number each time and console.logs it. ***************
    for (let counter = 1; counter <= 16777216; counter *= 2) {
      console.log(counter);
    }
  } else if (option === 6) {
    // *************** adds 3 to the number every time and stops when it hits 138. ***************
    for (let counter = 111; counter <= 138; counter += 3) {
      console.log(counter);
    }
  } else if (option === 7) {
    // *************** subtracts 10 each time until counter =0. ***************
    for (let counter = 100; counter >= 0; counter -= 10) {
      console.log(counter);
    }
  }
}
