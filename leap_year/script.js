"use strict";

let inputYear = 2000;

console.log(checkYear(inputYear));

function checkYear(year) {
  let isLeapYear = false;

  if (year % 4 === 0 && year % 100 != 0) {
    isLeapYear = true;
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    isLeapYear = true;
  }

  return isLeapYear;
}
