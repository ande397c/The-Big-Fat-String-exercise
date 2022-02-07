"use strict";

window.addEventListener("DOMContentLoaded", settingUp);

function settingUp() {
  document.querySelector("#generate").addEventListener("click", generateOutput);
}

function generateOutput() {
  // Read input value
  const inputValue = document.querySelector("#input").value;
  const outputValue = document.querySelector("#output").value;

  // Read option value
  const option = document.querySelector("#option").value;

  if (option === "1") {
    const newName1 = inputValue.charAt(0).toUpperCase() + inputValue.substring(1).toLowerCase();
    console.log(newName1);
    document.querySelector("#output").value = newName1;
  } else if (option === "2") {
    const newName2 = inputValue.substring(inputValue.indexOf(0), inputValue.indexOf(" "));
    console.log(newName2.length);
    document.querySelector("#output").value = newName2;
  } else if (option === "3") {
    const newName3 = inputValue.substring(inputValue.indexOf(0), inputValue.indexOf(" "));
    const lengthName3 = newName3.length;
    document.querySelector("#output").value = `First name is ${lengthName3} chacters long`;
  } else if (option === "4") {
    const newName4 = inputValue.substring(inputValue.indexOf(" ") + 1, inputValue.lastIndexOf(" "));
    const sPos = inputValue.indexOf(newName4) + 1;
    const endPos = inputValue.substring(0, inputValue.lastIndexOf(" ")).length;

    document.querySelector("#output").value = `Middle name is ${newName4}, startposition is ${sPos} and endposition is ${endPos}`;
  } else if (option === "5") {
    const newName5 = inputValue.substr(inputValue.length - 3);
    document.querySelector("#output").value = `Filename is ${newName5}`;
  } else if (option === "6") {
    document.querySelector("#output").value = "*".repeat(inputValue.length);
  } else if (option === "7") {
    document.querySelector("#output").value = inputValue.substring(0, 2) + inputValue.charAt(2).toUpperCase() + inputValue.substring(3);
  } else if (option === "8") {
    console.log(inputValue.includes(" "));
  }

  //   console.log(inputValue);
  //   console.log(option);
}
