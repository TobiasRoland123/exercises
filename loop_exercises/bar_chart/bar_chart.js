"use strict";

// // creating variables for the container and for the array of costumers
// const chartContainer = document.querySelector("#chartContainer");
// const costumerList = [];

// // waits until content is loaded, then calls genRanNum
// window.addEventListener("DOMContentLoaded", () => {
//   genArr();
// });

// // this function is generating the constumer array by pushing one random number at a time
// function genArr(newBar) {
//   // runs as long as i < 40
//   for (let i = 0; i < 40; i++) {
//     // pushes the number from genRanNum to the end of costumerlist
//     costumerList.push(genRanNum());
//     // calls the function modifyData and gives it the value of the last element in costumerList.
//   }
//   //   modifyData(costumerList[costumerList.length - 1]);
//   console.log(costumerList);
//   initLoop();
// }

// // generates a random number
// function genRanNum() {
//   return Math.floor(Math.random() * 32);
// }

// function initLoop() {
//   //   console.log(`Init loop has started`);
//   //   costumerList.shift();
//   //   costumerList.push(genRanNum());
//   //   modifyData(costumerList[costumerList.length - 1]);
//   modifyData();
//   displayData();
//   setTimeout(modifyData, 100);
// }

// // this function makes sure the bars is created and has the right height
// function modifyData() {
//   // the newBar is put in chartContainer
//   chartContainer.appendChild(newBar);
//   initLoop();
// }

// //  this function shows the bars on the chart
// function displayData(newBar) {

//   for (let i = 0; i < 40; i++) {

//     //   gives the newBarDiv the class chartBlock
//     newBarDiv.classList.add("chartBlock");
//     // gives newBarDiv a height based on the value of the value of newBar
//     newBarDiv.style.height = `${costumerList[i]}px`;
//     //   calls displayData and gives it the values of newBarDiv
//     displayData(newBarDiv);
//   }
// }

document.addEventListener("DOMContentLoaded", start);

let costumers = new Array();

function start() {
  document.querySelectorAll(".bar").forEach((div) => {
    div.addEventListener("mouseover", hover);
  });
  createStartArr();
}

function createStartArr() {
  for (let i = 0; i < 40; i++) {
    const newCostumer = getNumberOfCostumers();
    costumers.push(newCostumer);
  }
  console.log(costumers);
  startBarChart();
}

function startBarChart() {
  for (let i = 0; i < 40; i++) {
    if (i < 5) {
      document.querySelector(".bar--" + Number(i)).style.height = `${(costumers[i] *= 2)}px`;
      document.querySelector(".bar--" + Number(i)).style.background = "#4e734e";
    } else if (i < 10) {
      document.querySelector(".bar--" + Number(i)).style.height = `${(costumers[i] *= 2)}px`;
      document.querySelector(".bar--" + Number(i)).style.background = "#4a8c4a";
    } else if (i < 15) {
      document.querySelector(".bar--" + Number(i)).style.height = `${(costumers[i] *= 2)}px`;
      document.querySelector(".bar--" + Number(i)).style.background = "#3ea23e";
    } else if (i < 20) {
      document.querySelector(".bar--" + Number(i)).style.height = `${(costumers[i] *= 2)}px`;
      document.querySelector(".bar--" + Number(i)).style.background = "#31b731";
    } else if (i < 25) {
      document.querySelector(".bar--" + Number(i)).style.height = `${(costumers[i] *= 2)}px`;
      document.querySelector(".bar--" + Number(i)).style.background = "#31b731";
    } else if (i < 30) {
      document.querySelector(".bar--" + Number(i)).style.height = `${(costumers[i] *= 2)}px`;
      document.querySelector(".bar--" + Number(i)).style.background = "#1ed01e";
    } else if (i < 35) {
      document.querySelector(".bar--" + Number(i)).style.height = `${(costumers[i] *= 2)}px`;
      document.querySelector(".bar--" + Number(i)).style.background = "#0eea0e";
    }
  }
  document.querySelectorAll(".bar").forEach((div) => {
    div.classList.add("animation");
  });
  initLoop();
}

function initLoop() {
  //   setTimeout(modifyData, 1000);
  document.querySelector(".bar").addEventListener("animationiteration", modifyData);
}

function modifyData() {
  costumers.shift();
  costumers.push(getNumberOfCostumers());
  console.log(costumers);
  displayData();
}

function displayData() {
  for (let i = 0; i < 40; i++) {
    document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
  }
  initLoop();
}

function getNumberOfCostumers() {
  return Math.floor(Math.random() * 32) + 1;
}

function hover() {
  document.querySelector("#numberOfCostumers").textContent = `Number of costumers: ${this.style.height.substring(0, 2)}`;
}
