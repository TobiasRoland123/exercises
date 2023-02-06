"use strict";

// const theName = "Peter Heronimous Lind";
const theName = "Albus Percival Wulfric Brian Dumbledore";

let firstName;
let middleName;
let lastName;

firstName = theName.substring(0, theName.indexOf(" "));

middleName = theName.substring(theName.indexOf(" "), theName.lastIndexOf(" "));

lastName = theName.substring(theName.lastIndexOf(" "));

console.log(`this is first name ${firstName}`);

console.log(`this is midlle name ${middleName}`);

console.log(`this is last name ${lastName}`);
