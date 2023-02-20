"use strict";

// let iteration = 0;

// // for (let i = 0; i <= 10; i++) {
// //   console.log("loop", i);
// //   setTimeout(200);
// // }

// loop();

// function loop() {
//   while (iteration < 10) {
//     iteration += 1;
//     console.log("loop", iteration);
//     setTimeout(loop, 200);
//   }
// }

// const color = {
//   hex: "#c0ffee",
//   rgb: { r: 192, g: 255, b: 238 },
//   hsl: { h: 264, s: 100, l: 88 },
// };

// console.log(`color rgb r:${color.rgb.r}`);
// console.log(`color hex: ${color.hex}`);
// console.log(`color hsl hue: ${color.hsl.h}`);

// const Animal = {
//   name: "",
//   type: "unknown",
//   desc: "",
//   age: 0,
// };

// const animal = Object.create(Animal);

// animal.image = "image.jpg";

// console.log(Animal.image);

// const heading = document.querySelector("h1");

// let firstName = "Tobias";
// let lastName = "Roland";

// // sayHello(firstName, lastName);

// function sayHello(firstName, lastName) {
//   console.log(`Hello my name is ${firstName} ${lastName}`);
// }

// let myFirstName = "Tobias";
// let myAnimalType = "cat";
// let myAnimalName = "Sidse";

// // presentPet(myFirstName, myAnimalType, myAnimalName);

// presentPet(myFirstName, myAnimalType, myAnimalName);

// function presentPet(firstName, animalType, animalName) {
//   console.log(`My Name is ${firstName} i have a ${animalType} called ${animalName}`);
// }

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }

// const sayHi = greeting;

// console.log(sayHi("Tobias"));

// const person3 = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hired: false,
// };

// const person4 = {
//   firstName: "Fred",
//   lastName: "Weasley",
//   hired: false,
// };

// function hire(person) {
//   person.hired = true;
// }

// function fire(person) {
//   person.hired = false;
// }

// function fireOrHire(action, person) {
//   action(person);
// }

// fireOrHire(hire, person4);

// fireOrHire(fire, person3);

// console.log(person3);
// console.log(person4);

// console.log(`This is person3:
// ${person3.firstName}
// ${person3.lastName}
// ${person3.hired}

// `);

// console.log(`This is person4:
// ${person4.firstName}
// ${person4.lastName}
// ${person4.hired}

// `);

// loadJSON("students.json", showJsonData);

// async function loadJSON(url, callback) {
//   const response = await fetch(url);
//   const jsonData = await response.json();

//   callback(jsonData);
// }

// function showJsonData(jsonData) {
//   console.table(jsonData);
// }

// loadJSON("students.json", showJsonData);

// async function loadJSON(url, callback) {
//   const response = await fetch(url);
//   const jsonData = await response.json();

//   callback(jsonData);
// }

// function showJsonData(jsonData) {
//   jsonData.forEach(showName);
// }

// function showName(student) {
//   console.log(student.fullname);
// }

const animals = [
  { name: "mandu", type: "cat" },
  { name: "Mia", type: "cat" },
  { name: "bob", type: "dog" },
  { name: "scooby", type: "dog" },
];

function all() {
  return true;
}

function none() {
  return false;
}

console.log("ALL ", animals.filter(all));
console.log("NONE ", animals.filter(none));

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}
function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}

console.log("Cats only ", animals.filter(isCat));

console.log("Dogs only ", animals.filter(isDog));
