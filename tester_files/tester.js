"use strict";

let iteration = 0;

// for (let i = 0; i <= 10; i++) {
//   console.log("loop", i);
//   setTimeout(200);
// }

loop();

function loop() {
  while (iteration < 10) {
    iteration += 1;
    console.log("loop", iteration);
    setTimeout(loop, 200);
  }
}
