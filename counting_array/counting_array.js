"use strict";

const arr = [];
let iteration = 0;

loop();

function loop() {
  if (iteration < 9) {
    arr.unshift(iteration);
    iteration++;
  } else {
    arr.pop();
    arr.unshift(iteration);
    iteration++;
  }
  console.log(arr);

  setTimeout(loop, 1000);
}
