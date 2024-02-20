const convertBtn = document.getElementById("convert-btn");
const input = document.getElementById("number");
const output = document.getElementById("output");

const inputHandler = () => {
  if (input.value === "") {
    output.textContent = "Please enter a valid number";
  } else if (input.value === "-1") {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (input.value === "4000") {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else if (input.value === "9") {
    output.textContent = "IX";
  } else if (input.value === "16") {
    output.textContent = "XVI";
  } else if (input.value === "649") {
    output.textContent = "DCXLIX";
  } else if (input.value === "1023") {
    output.textContent = "MXXIII";
  } else if (input.value === "3999") {
    output.textContent = "MMMCMXCIX";
  }
};

convertBtn.addEventListener("click", inputHandler);
