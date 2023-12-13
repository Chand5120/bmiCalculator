"use strict";

let height = document.getElementById("height");
let weight = document.getElementById("weight");
let btnSubmit = document.querySelector(".btnSubmit");


let bmi;
btnSubmit.addEventListener("click", function() {
    bmi = (+weight.value /  Number((height.value ** 2))) * 10000;
    document.querySelector(".result").textContent = `Your BMI value is ${bmi}`;
    // console.log(bmi);
});