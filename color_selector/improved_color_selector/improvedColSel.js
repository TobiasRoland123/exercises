"use strict";

window.addEventListener("DOMContentLoaded", start);

// the start function runs the add eventlistener function, that makes it possible to run the delegator
function start() {
  addEventListener();
}

// listens for an input from the inputfield and then calls the delegator function
function addEventListener() {
  document.querySelector("input").addEventListener("input", delegator);
}

// This function is calling all our function
function delegator() {
  //  Creates a variable and gives it the returned value from getInputValue function
  let colorValue = getInputValue(this.value);
  //   Calls a function that shows the HEX colorValue as Text in HTML
  showHexText(colorValue);
  //   gives the variable the return value from the function hexToRgb
  colorValue = hexToRgb(colorValue);
  //   now the colorValue is in rgb:
  // calls showRgbText function that  shows the rgb value as text in HTML
  showRgbText(colorValue);
  //   calls the showColoredBox function and gives it the parameter from the convertRgbToCss fundtion which is given the parameter of colorValue.
  showColoredBox(convertRgbToCss(colorValue));
  //   gives the colorValue variable the value of the return value from rgbToHsl function
  // The rgbToHsl fundtion is given 3 parameters the r,g and b from colorValue
  colorValue = rgbToHsl(colorValue.r, colorValue.g, colorValue.b);
  //   now the colorValue is in HSL
  //   Calls the function showHslText that show the hsl value as text in HTML
  showHslText(colorValue);
}

// returns the value of the input
// this function is kinda stupid, but was reqired by the assignment criteria
function getInputValue(value) {
  return value;
}

// converts the colorValue from hex to rgb and returns r,g,b
function hexToRgb(hexValue) {
  //   console.log(hexValue);
  const r = parseInt(hexValue.substring(1, 3), 16);
  const g = parseInt(hexValue.substring(3, 5), 16);
  const b = parseInt(hexValue.substring(5, 7), 16);

  return { r, g, b };
}

// this function converts rgb to hsl and return h,s,l
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

// this function sets the background color of the div with class .showColorBox
function showColoredBox(cssString) {
  const colorBox = document.querySelector(".showColorBox");
  colorBox.style.backgroundColor = cssString;
}

// this function show the hex value as text in the HTML
function showHexText(hexValue) {
  const hexTextField = document.querySelector(".showHex");
  hexTextField.textContent = `HEX: ${hexValue}`;
}

// this function show the rgb value as text in the HTML
function showRgbText(rgbValue) {
  const rgbTextField = document.querySelector(".showRgb");
  rgbTextField.textContent = `RGB: r:${rgbValue.r}, g${rgbValue.g}, b${rgbValue.b}`;
}

// this function show the hsl value as text in the HTML
function showHslText(hslValue) {
  const hslTextField = document.querySelector(".showHsl");

  hslTextField.textContent = `HSL: h:${Math.round(hslValue.h)}°, s:${Math.round(hslValue.s)}%, l:${Math.round(hslValue.l)}%`;
}

// This function returns a value that can be used to set rgb color in css
function convertRgbToCss(rgbValue) {
  return `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`;
}
