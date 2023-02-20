"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons

  document.querySelectorAll(".filter").forEach((button) => button.addEventListener("click", selectFilter));

  loadJSON();
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

// this functions as a forEach, so that for each object in the jsonData it runs.
function preapareObject(jsonObject) {
  // creates a copy of the Animal prototype, and calls it animal
  const animal = Object.create(Animal);

  // splits fullname into array
  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

// sets the selected filter
function selectFilter() {
  // the filter variable becomes equal to the chosen filter
  let filter = this.dataset.filter;
  // calls the filter list function with filter as parameter
  filterList(filter);
}

function filterList(animalType) {
  // creates a variable "filteredList"
  let filteredList = allAnimals;
  //   checks if animal type (the filter) is cat
  if (animalType === "cat") {
    // if animal type is equal to cat then run all animals through cat filter
    filteredList = allAnimals.filter(isCat);
  }
  //   checks if animal type (the filter) is dog
  else if (animalType === "dog") {
    // if animal type is equal to cat then run all animals through dog filter

    filteredList = allAnimals.filter(isDog);
  }
  // calls displayList with filteredList as a parameter
  displayList(filteredList);
}

// returns all animals with animal.type equal to "cat"
function isCat(animal) {
  return animal.type === "cat";
}

// returns all animals with animal.type equal to "dog"

function isDog(animal) {
  return animal.type === "dog";
}
