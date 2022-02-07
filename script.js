"use strict";

window.addEventListener("DOMContentLoaded", settingUp);

function settingUp() {
  document.querySelector("#generate").addEventListener("click", generateOutput);
}

function generateOutput() {
  console.log("button works");

  // Read input value
  const inputValue = document.querySelector("#input").value;

  // Read option value
  const option = document.querySelector("#option").value;

  if (option === "1") {
    const newName1 = inputValue.charAt(0).toUpperCase() + inputValue.substring(1).toLowerCase();
    console.log(newName1);
    document.querySelector("#output").value = newName1;
  } else if (option === "2") {
    console.log("true2");
  } else if (option === "3") {
    console.log("true3");
  } else if (option === "4") {
    console.log("true4");
  } else if (option === "5") {
    console.log("true5");
  } else if (option === "6") {
    console.log("true6");
  } else if (option === "7") {
    console.log("true7");
  } else if (option === "8") {
    console.log("true8");
  }

  //   console.log(inputValue);
  //   console.log(option);
}
