"use strict";

// window.addEventListener("DOMContentLoaded", randomBackground);

// function randomBackground() {
//   const rgbColor = randomColor();

//   const cssColor = rgbToCss(rgbColor);

//   document.querySelector("body").style.backgroundColor = cssColor;
// }

// function randomColor() {
//   let r, g, b;
//   r = Math.floor(Math.random() * 255);
//   g = Math.floor(Math.random() * 255);
//   b = Math.floor(Math.random() * 255);

//   return { r, g, b };
// }

// function rgbToCss(cssColor) {
//   return `rgb(${cssColor.r}, ${cssColor.g}, ${cssColor.b})`;
// }

// ************************ rgb to hex ***********************

function convertToRGB(hexValue) {
  //   console.log(hexValue);
  let r = parseInt(hexValue.substring(1, 3), 16);
  let g = parseInt(hexValue.substring(3, 5), 16);
  let b = parseInt(hexValue.substring(5, 7), 16);

  convertToHSL(r, g, b);
  showRGB(r, g, b);
}

let r, g, b;
r = 24;
g = 122;
b = 22;

let yourNumber = { r, g, b };
console.log(yourNumber);

rgbToHex(r, g, b);

function rgbToHex() {}

// ************************ hex to rgb ***********************
