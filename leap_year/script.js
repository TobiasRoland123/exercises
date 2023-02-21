"use strict";

// const leapYearList = [
//   1900, 1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980,
//   1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056,
// ];

let inputYear = 1800;

const button = document.querySelector("button");

button.addEventListener("click", schowYear);

function schowYear() {
  inputYear = document.querySelector("input").value;

  document.querySelector("h1").textContent = `Year ${inputYear} is ${checkYear(inputYear)}`;
}

// console.log(leapYearList.forEach(checkYear));

function checkYear(year) {
  let isLeapYear = false;

  if (year % 4 === 0 && year % 100 != 0) {
    isLeapYear = true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    isLeapYear = true;
  }
  console.log(isLeapYear);
  return isLeapYear;
}
