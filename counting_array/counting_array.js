"use strict";

const arr = [];
let iteration = 1;

loop();

function loop() {
  if (iteration < 10) {
    arr.unshift(iteration);
    iteration++;

    setTimeout(loop, 500);
  } else {
    arr.pop();
    arr.unshift(iteration);
    iteration++;
    setTimeout(loop, 500);
  }
  console.log(arr);
}
