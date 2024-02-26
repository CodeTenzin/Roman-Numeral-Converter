const convertBtn = document.getElementById("convert-btn");
const input = document.getElementById("number");
const output = document.getElementById("output");
output.style.display = "none";

const inputHandler = () => {
  output.style.display = "block";
  let num = Number(input.value);

  if (input.value === "") {
    output.classList.add("error");
    output.textContent = "Please enter a valid number";
    return;
  } else if (num < 1) {
    output.classList.add("error");
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else if (num >= 4000) {
    output.classList.add("error");
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
  output.classList.remove("error");
  output.textContent = romanNumerals;
};

convertBtn.addEventListener("click", inputHandler);
