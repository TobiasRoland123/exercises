"use strict";

const artwork1 = document.querySelector("#artwork1");
const artwork2 = document.querySelector("#artwork2");
const artwork3 = document.querySelector("#artwork3");
const artwork4 = document.querySelector("#artwork4");
const artwork5 = document.querySelector("#artwork5");
const artwork6 = document.querySelector("#artwork6");
const artwork7 = document.querySelector("#artwork7");
const artwork8 = document.querySelector("#artwork8");
const artwork9 = document.querySelector("#artwork9");

window.addEventListener("DOMContentLoaded", () => {
  doStuff();
});

function doStuff() {
  for (let i = 100; i <= 300; i += 20) {
    const box = document.createElement("div");

    box.classList.add("box");
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;
    artwork1.appendChild(box);
  }

  for (let i = 0; i <= 90; i += 10) {
    const box = document.createElement("div");

    box.classList.add("box");
    box.style.rotate = `${i}deg`;
    artwork2.appendChild(box);
  }
  for (let i = 0; i <= 200; i += 10) {
    const box = document.createElement("div");

    box.classList.add("circle");
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;
    artwork3.appendChild(box);
  }
  for (let i = -90; i <= 90; i += 20) {
    const box = document.createElement("div");

    box.classList.add("box");
    box.style.transform = `translate(${i}px,${i}px)`;
    artwork4.appendChild(box);
  }
  for (let i = 1; i <= 512; i *= 2) {
    const box = document.createElement("div");

    box.classList.add("circle");
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;

    artwork5.appendChild(box);
  }

  for (let i = -20; i <= 45; i += 5) {
    const box = document.createElement("div");

    box.classList.add("circle");
    box.style.transform = `translateX(${i - 50})`;
    box.style.rotate = `${i * 4}deg`;

    artwork6.appendChild(box);
  }
  for (let i = 0; i <= 200; i += 10) {
    const box = document.createElement("div");

    box.classList.add("circle");
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;
    box.style.transform = `translate(${i}px,${-(i / 2)}px)`;

    artwork7.appendChild(box);
  }
  for (let i = 50; i <= 200; i += 10) {
    const box = document.createElement("div");

    box.classList.add("box");
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;
    box.style.transform = `translate(${i / 2}px)`;
    box.style.rotate = `${i}deg`;
    artwork8.appendChild(box);
  }

  for (let i = 50; i <= 200; i += 30) {
    const box = document.createElement("div");

    box.classList.add("box", "circle");
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;

    artwork9.appendChild(box);
  }
}
