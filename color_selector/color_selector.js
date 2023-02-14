"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  listenForColor();
}

function addEventListener() {
  document.querySelector("input").addEventListener("input", colorConvert);
}

function colorConvert() {
  //   console.log(this.value);
  convertToRGB(this.value);
  showColor(this.value);
  showHex(this.value);
}

function convertToRGB(hexValue) {
  //   console.log(hexValue);
  let r = parseInt(hexValue.substring(1, 3), 16);
  let g = parseInt(hexValue.substring(3, 5), 16);
  let b = parseInt(hexValue.substring(5, 7), 16);

  // console.log(`this is r: ${r} `);
  // console.log(`this is g: ${g} `);
  // console.log(`this is b: ${b} `);

  convertToHSL(r, g, b);
  showRGB(r, g, b);
}
function convertToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  // console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  showHSL(h, s, l);
}

function showColor(hexValue) {
  const colorBox = document.querySelector(".showColorBox");
  colorBox.style.backgroundColor = `${hexValue}`;
}
function showRGB(r, g, b) {
  const rgbTextField = document.querySelector(".showRgb");
  rgbTextField.textContent = `RGB: r:${r}, g${g}, b${b}`;
}
function showHSL(h, s, l) {
  const hslTextField = document.querySelector(".showHsl");

  hslTextField.textContent = `HSL: h:${Math.trunc(h)}, s:${Math.trunc(s)}%, l:${Math.trunc(l)}%`;
}

function showHex(hexValue) {
  console.log(hexValue);
  const hexTextField = document.querySelector(".showHex");

  hexTextField.textContent = `HEX: ${hexValue}`;
}
