"use strict";

// let rgb = `rgb(192, 13, 1)`;

// convertToRGBNumbers(rgb);

// function convertToRGBNumbers(rgb) {
//   let r = rgb.substring(rgb.indexOf(`(`) + 1, rgb.indexOf(`,`));
//   let g = rgb.substring(rgb.indexOf(`,`) + 1, rgb.lastIndexOf(`,`));
//   let b = rgb.substring(rgb.lastIndexOf(`,`) + 1, rgb.lastIndexOf(`)`));

//   r = r.trim();
//   g = g.trim();
//   b = b.trim();

//   r = parseInt(r);
//   g = parseInt(g);
//   b = parseInt(b);

//   //   console.log(`r is: _${r}_`);
//   //   console.log(`g is: _${g}_`);
//   //   console.log(`b is: _${b}_`);

//   console.log(r);
//   console.log(g);
//   console.log(b);
// }

// function convertRgbToHex() {}

let r, g, b;

r = 233;
g = 21;
b = 111;

rgbToHex(r, g, b);

function rgbToHex(r, g, b) {
  console.log(r, g, b);
}
