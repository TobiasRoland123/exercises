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

const heading = document.querySelector("h1");

let firstName = "Tobias";
let lastName = "Roland";

// sayHello(firstName, lastName);

function sayHello(firstName, lastName) {
  console.log(`Hello my name is ${firstName} ${lastName}`);
}

let myFirstName = "Tobias";
let myAnimalType = "cat";
let myAnimalName = "Sidse";

// presentPet(myFirstName, myAnimalType, myAnimalName);

presentPet(myFirstName, myAnimalType, myAnimalName);

function presentPet(firstName, animalType, animalName) {
  console.log(`My Name is ${firstName} i have a ${animalType} called ${animalName}`);
}
