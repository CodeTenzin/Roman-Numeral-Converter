const convertBtn = document.getElementById("convert-btn");
const input = document.getElementById("number");
const output = document.getElementById("output");

const inputHandler = () => {
  // if (input.value === "") {
  //   output.textContent = "Please enter a valid number";
  // } else if (input.value === "-1") {
  //   output.textContent = "Please enter a number greater than or equal to 1";
  // } else if (input.value === "4000") {
  //   output.textContent = "Please enter a number less than or equal to 3999";
  // } else if (input.value === "9") {
  //   output.textContent = "IX";
  // } else if (input.value === "16") {
  //   output.textContent = "XVI";
  // } else if (input.value === "649") {
  //   output.textContent = "DCXLIX";
  // } else if (input.value === "1023") {
  //   output.textContent = "MXXIII";
  // } else if (input.value === "3999") {
  //   output.textContent = "MMMCMXCIX";
  // }

  let num = Number(input.value);

  if (input.value === "") {
    output.textContent = "Please enter a valid number";
    return;
  } else if (num < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else if (num >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  const numerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  const numeralKeys = Object.keys(numerals).reverse();
  let romanNumerals = "";
  numeralKeys.forEach((key) => {
    while (num >= key) {
      romanNumerals += numerals[key];
      num -= key;
    }
  });
  output.textContent = romanNumerals;
};

convertBtn.addEventListener("click", inputHandler);
