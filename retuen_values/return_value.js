"use strict";

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }

// const result = greeting("Any name");
// console.log(result);

// console.log(`result directly:`, greeting("Direct Tobias"));

// console.log(greeting("any name"));

// ************************** capitalize str  ****************************

// const theName = "pETer";
// const cap = capitalize(theName);

// console.log(cap);

// function capitalize(theName) {
//   return `${theName[0].toUpperCase()}${theName.substring(1).toLowerCase()}`;
// }

// ************************** fullName( lastName, firstName [, middleName] )  ****************************

// let variable = createFullName("peter", "andersen");
// console.log(variable);

// function createFullName(lastName, firstName, middleName) {
//   if (middleName === undefined) {
//     return `${firstName} ${lastName}`;
//   } else {
//     return `${firstName} ${middleName} ${lastName}`;
//   }
// }

function createPerson(firstName, lastName, age, isGinger) {
  return { firstName, lastName, age, isGinger };
}

let newPerson = createPerson("tobias", "roland", 22, false);

console.log("KEA person's name is: ", newPerson.firstName);
