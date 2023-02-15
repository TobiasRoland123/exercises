"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  addEventListener();
  delegator();
}

function addEventListener() {
  document.querySelector("input").addEventListener("input", delegator);
}

function delegator() {
  let colorValue = getInputValue(this.value);
  showHexText(colorValue);

  colorValue = hexToRgb(colorValue);
  showRgbText(colorValue);
  let cssString = convertRgbToCss(colorValue);
  showColoredBox(cssString);

  colorValue = rgbToHsl(colorValue.r, colorValue.g, colorValue.b);
  showHslText(colorValue);

  console.log(colorValue);
}

function getInputValue(value) {
  return value;
}

function hexToRgb(hexValue) {
  //   console.log(hexValue);
  let r = parseInt(hexValue.substring(1, 3), 16);
  let g = parseInt(hexValue.substring(3, 5), 16);
  let b = parseInt(hexValue.substring(5, 7), 16);

  return { r, g, b };
}

function rgbToHsl(r, g, b) {
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
  return { h, s, l };
}

function showColoredBox(cssString) {
  const colorBox = document.querySelector(".showColorBox");
  colorBox.style.backgroundColor = cssString;
}

function showHexText(hexValue) {
  const hexTextField = document.querySelector(".showHex");
  hexTextField.textContent = `HEX: ${hexValue}`;
}

function showRgbText(rgbValue) {
  const rgbTextField = document.querySelector(".showRgb");
  rgbTextField.textContent = `RGB: r:${rgbValue.r}, g${rgbValue.g}, b${rgbValue.b}`;
}

function showHslText(hslValue) {
  const hslTextField = document.querySelector(".showHsl");

  hslTextField.textContent = `HSL: h:${Math.trunc(hslValue.h)}, s:${Math.trunc(hslValue.s)}%, l:${Math.trunc(hslValue.l)}%`;
}

function convertRgbToCss(rgbValue) {
  return `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`;
}
