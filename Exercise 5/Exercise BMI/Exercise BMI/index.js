import { calculateBMI } from './calculateBMI.js';

document.getElementById("calculateBtn").addEventListener("click", function (event) {
  event.preventDefault();
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const bmi = calculateBMI(weight, height);
  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  document.getElementById("result").innerHTML = `BMI: ${bmi}, Category: ${category}`;
});
