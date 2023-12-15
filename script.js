"use strict";

let height = document.getElementById("height");
let weight = document.getElementById("weight");
let btnSubmit = document.querySelector(".btnSubmit");
let outerSection = document.querySelector(".outerBox");
let modal = document.querySelector(".modalWindow");
let displayBmi = document.querySelector(".bmiDisplay");
let exitBtn = document.querySelector(".exitButton");


let bmi;
btnSubmit.addEventListener("click", function() {
    bmi = ((+weight.value /  Number((height.value ** 2))) * 10000).toFixed(1);
    // document.querySelector(".result").textContent = `Your BMI value is ${bmi}`;ss
    outerSection.classList.toggle("hidden");
    modal.classList.toggle("hidden");
    displayBmi.textContent = `Your BMI is ${bmi}`;
});

exitBtn.addEventListener("click", function() {
    outerSection.classList.toggle("hidden");
    modal.classList.toggle("hidden");
});
