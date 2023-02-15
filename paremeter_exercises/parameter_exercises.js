"use strict";

// ************************* Capitalization function  *************************

// const theName = "allan";

// capitalize(theName);

// function capitalize(str) {
//   console.log(`${str[0].toUpperCase()}${str.substring(1)}`);
// }

// *************************  Name-parts function *************************

// let fullName = "Samuel Tobias Roland";

// getNameParts(fullName);

// function getNameParts(fullName) {
//   let firstName = `${fullName.substring(0, fullName.indexOf(" "))}`;
//   let middleName;
//   let lastName = `${fullName.substring(fullName.lastIndexOf(" ") + 1)}`;
//   if (fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" ")) === "") {
//     middleName = undefined;
//   } else {
//     middleName = `${fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "))}`;
//   }

//   console.log(firstName, middleName, lastName);
// }

// *************************  fullName function *************************

let fullName = "Lind Peter Heronimous";

getNameParts(fullName);

function getNameParts(fullName) {
  let firstName = `${fullName.substring(0, fullName.indexOf(" "))}`;
  let middleName;
  let lastName = `${fullName.substring(fullName.lastIndexOf(" ") + 1)}`;
  if (fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" ")) === "") {
    middleName = undefined;
  } else {
    middleName = `${fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "))}`;
  }

  createFullName(lastName, firstName, middleName);
}

function createFullName(lastName, firstName, middleName) {
  if (middleName === undefined) {
    console.log(firstName, lastName);
  } else {
    console.log(firstName, middleName, lastName);
    // console.log(`_${firstName}_ _${middleName}_ _${lastName}_`);
  }
}
