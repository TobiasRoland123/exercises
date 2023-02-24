"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  star: false,
  winner: false,
};

const settings = {
  filterBy: "all",
  sortBy: "name",
  sortDir: "asc",
};

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons

  document.querySelectorAll(".filter").forEach((button) => button.addEventListener("click", selectFilter));
  document.querySelectorAll('[data-action="sort"]').forEach((button) => button.addEventListener("click", selectSort));
  document.querySelectorAll("[data-field=star]").forEach((star) => star.addEventListener("click", selectStar));
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

  // Fixed so filter and sort os done at first load
  buildList();
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

  if (animal.star === true) {
    clone.querySelector("[data-field=star]").textContent = "⭐";
  } else {
    clone.querySelector("[data-field=star]").textContent = "☆";
  }

  clone.querySelector("[data-field=star]").addEventListener("click", starClicked);

  function starClicked() {
    if (animal.star === true) {
      animal.star = false;
    } else {
      animal.star = true;
    }

    buildList();
  }

  // Winners

  clone.querySelector("[data-field=winner]").dataset.winner = animal.winner;
  clone.querySelector("[data-field=winner]").addEventListener("click", clickWinner);

  function clickWinner() {
    if (animal.winner === true) {
      animal.winner = false;
    } else {
      tryToMakeAWinner(animal);
    }
    buildList();
  }

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

function tryToMakeAWinner(selectedAnimal) {
  const winners = allAnimals.filter((animal) => animal.winner);
  const numberOfWinners = winners.length;
  const other = winners.filter((animal) => animal.type === selectedAnimal.type).shift();

  // if there is another of same type
  if (other !== undefined) {
    console.log("there can be only one winner of each type");
    removeOther(other);
  } else if (numberOfWinners >= 2) {
    console.log("there can be only be two winners!");
    removeAorB(winners[0], winners[1]);
  } else {
    makeWinner(selectedAnimal);
  }

  // just for testing
  // makeWinner(selectedAnimal);

  function removeOther(other) {
    // ask user to remove or ignore other
    document.querySelector("#onlyonekind").classList.remove("dialog");
    document.querySelector("#onlyonekind .closebutton").addEventListener("click", closeDigalog);
    document.querySelector("#onlyonekind [data-action=remove1]").addEventListener("click", clickRemoveOther);

    document.querySelector("#onlyonekind .animal1").textContent = other.name;

    function closeDigalog() {
      document.querySelector("#onlyonekind").classList.add("dialog");
      document.querySelector("#onlyonekind .closebutton").removeEventListener("click", closeDigalog);
      document.querySelector("#onlyonekind [data-action=remove1]").removeEventListener("click", clickRemoveOther);
    }

    function clickRemoveOther() {
      removeWinner(other);
      makeWinner(selectedAnimal);
      buildList();
      closeDigalog();
    }

    // if ignore - do nothing
    // if remove other:
  }
  function removeAorB(winnerA, winnerB) {
    // ask user to ignore or remove winnerA or winnerB
    document.querySelector("#onlytwowinners").classList.remove("dialog");
    document.querySelector("#onlytwowinners .closebutton").addEventListener("click", closeDigalog);
    document.querySelector("#onlytwowinners [data-action=remove1]").addEventListener("click", clickRemoveA);
    document.querySelector("#onlytwowinners [data-action=remove2]").addEventListener("click", clickRemoveB);

    document.querySelector("#onlytwowinners .animal1").textContent = winnerA.name;
    document.querySelector("#onlytwowinners .animal2").textContent = winnerB.name;

    // if ignore - do nothing
    function closeDigalog() {
      document.querySelector("#onlytwowinners").classList.add("dialog");
      document.querySelector("#onlytwowinners .closebutton").removeEventListener("click", closeDigalog);
      document.querySelector("#onlytwowinners [data-action=remove1]").removeEventListener("click", clickRemoveA);
      document.querySelector("#onlytwowinners [data-action=remove2]").removeEventListener("click", clickRemoveB);
    }

    // if remove winnerA -:

    function clickRemoveA() {
      removeWinner(winnerA);
      makeWinner(selectedAnimal);
      buildList();
      closeDigalog();
    }

    // if remove winnerB-:
    function clickRemoveB() {
      removeWinner(winnerB);
      makeWinner(selectedAnimal);
      buildList();
      closeDigalog();
    }
  }
  function removeWinner(winnerAnimal) {
    winnerAnimal.winner = false;
  }
  function makeWinner(animal) {
    animal.winner = true;
  }
}

// sets the selected filter
function selectFilter() {
  // the filter variable becomes equal to the chosen filter
  let filter = this.dataset.filter;
  // calls the setFilter funtion and sends the chosen dataset as a parameter
  setFilter(filter);
}

function setFilter(filter) {
  settings.filterBy = filter;
  buildList();
}

function filterList(filteredList) {
  //   checks if animal type (the filter) is cat
  if (settings.filterBy === "cat") {
    // if animal type is equal to cat then run all animals through cat filter
    filteredList = allAnimals.filter(isCat);
  }
  //   checks if animal type (the filter) is dog
  else if (settings.filterBy === "dog") {
    // if animal type is equal to cat then run all animals through dog filter

    filteredList = allAnimals.filter(isDog);
  }
  // console.log(filteredList);
  // filteredList.sort(sortAlphabeticly);
  // calls displayList with filteredList as a parameter

  return filteredList;
}

// returns all animals with animal.type equal to "cat"
function isCat(animal) {
  return animal.type === "cat";
}

// returns all animals with animal.type equal to "dog"

function isDog(animal) {
  return animal.type === "dog";
}

function buildList() {
  const currentList = filterList(allAnimals);
  const sortedList = sortList(currentList);

  // console.log(sortedList);

  displayList(sortedList);
}
function selectSort(event) {
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection;

  if (settings.sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else if (settings.sortDir === "desc") {
    event.target.dataset.sortDirection = "asc";
  }

  setSort(sortBy, sortDir);
}

function setSort(sortBy, sortDir) {
  settings.sortBy = sortBy;
  settings.sortDir = sortDir;
  buildList();
}

function sortList(sortedList) {
  // let sortedList = allAnimals;
  let direction = 1;

  if (settings.sortDir === "desc") {
    direction = -1;
  } else {
    direction = 1;
  }

  sortedList = sortedList.sort(sortByProperty);

  function sortByProperty(elementA, elementB) {
    if (elementA[settings.sortBy] < elementB[settings.sortBy]) {
      return -1 * direction;
    } else if (elementA[settings.sortBy] > elementB[settings.sortBy]) {
      return 1 * direction;
    } else {
      return 0;
    }
  }

  return sortedList;
}

function selectStar() {
  console.log("selectStar called");
}
