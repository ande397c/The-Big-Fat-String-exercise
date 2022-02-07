"use strict";

window.addEventListener("DOMContentLoaded", settingUp);

function settingUp() {
  document.querySelector("#generate").addEventListener("click", generateOutput);
}

function generateOutput() {
  console.log("button works");

  // Read input value
  const inputValue = document.querySelector("#input").value;

  console.log(inputValue);
}
