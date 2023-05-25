"use strict";

// Storing the HTML class and id inside the variable
const inputNumberLuas = document.querySelector("#input-sisi-luas");
const inputNumberKeliling = document.querySelector("#input-sisi-keliling");
const formLuas = document.querySelector(".form-container-luas");
const formKeliling = document.querySelector(".form-container-keliling");
const btnHitungLuas = document.querySelector(".btn-hitung-luas");
const btnHitungKeliling = document.querySelector(".btn-hitung-keliling");
const btnResetLuas = document.querySelector(".btn-reset-luas");
const btnResetKeliling = document.querySelector(".btn-reset-keliling");
const selectOption = document.querySelector(".list-menu");
const optionLengthLuas = document.querySelector(".length-measurement-luas");
const optionLengthKeliling = document.querySelector(".length-measurement-keliling");

// Regex pattern for only accept number
const patternNumber = new RegExp(/^[0-9]+$/);

// Function for reset button
const clearUI = function (inputTag, formTag, outputClass, className) {
  inputTag.value = "";
  document.querySelector(outputClass).style.visibility = "hidden";
  formTag.classList.remove(className);
};

// Function for show error
const showError = function (formTag, errorClass, message) {
  formTag.classList.add(errorClass);
  const small = formTag.querySelector("small");
  small.innerText = message;
};

// Function display output luas with length measure
const showOutputLuas = function (outputClass, resultLuas, measure) {
  document.querySelector(outputClass).style.visibility = "visible";
  document.querySelector(".hasil-luas").innerHTML = `Luas = ${resultLuas} ${measure}<sup>2</sup>`;
};

const showOutputKeliling = function (outputClass, resultKeliling, measure) {
  document.querySelector(outputClass).style.visibility = "visible";
  document.querySelector(".hasil-keliling").innerHTML = `Keliling = ${resultKeliling} ${measure}`;
};

// Select dropdown value
selectOption.addEventListener("change", function () {
  const value = selectOption.value;
  if (value === "keliling") {
    //   WHen user choose "keliling", check if value same as the option value
    document.querySelector(".keliling-persegi").style.display = "flex";
    document.querySelector(".luas-persegi").style.display = "none";
  } else if (value === "luas") {
    //   WHen user choose "luas", check if value same as the option value
    document.querySelector(".luas-persegi").style.display = "flex";
    document.querySelector(".keliling-persegi").style.display = "none";
  }
});

// Handling Hitung Luas button
btnHitungLuas.addEventListener("click", function (event) {
  // Prevent button to submit
  event.preventDefault();

  // Check if input is empty
  if (inputNumberLuas.value === "") {
    // Validation if input is empty
    showError(formLuas, "error-luas", "Input tidak boleh kosong!");
  } else if (!patternNumber.test(inputNumberLuas.value)) {
    // Validation if input is not a number
    showError(formLuas, "error-luas", "Hanya menerima angka!");

    // Hide the output
    document.querySelector(".output_luas").style.visibility = "hidden";
  } else {
    // Condition for length measurement centimeter and meter
    const lengthMeasure = optionLengthLuas.value;

    if (lengthMeasure === "cm") {
      // Remove error class when showing the result
      formLuas.classList.remove("error-luas");

      // Formula Luas
      const sisiPersegi = Number(inputNumberLuas.value);
      const result = sisiPersegi * sisiPersegi;

      // Showing the result keliling persegi
      showOutputLuas(".output_luas", result, lengthMeasure);
    } else {
      // Remove error class when showing the result
      formLuas.classList.remove("error-luas");

      // Formula Luas
      const sisiPersegi = Number(inputNumberLuas.value);
      const result = sisiPersegi * sisiPersegi;

      // Showing the result luas persegi
      showOutputLuas(".output_luas", result, lengthMeasure);
    }
  }
});

// Handling Hitung Keliling button
btnHitungKeliling.addEventListener("click", function (event) {
  // Prevent button to submit
  event.preventDefault();

  // Check if input is empty
  if (inputNumberKeliling.value === "") {
    // Validation if input is empty
    showError(formKeliling, "error-keliling", "Input tidak boleh kosong!");
  } else if (!patternNumber.test(inputNumberKeliling.value)) {
    // Validation if input is not a number
    showError(formKeliling, "error-keliling", "Hanya menerima angka!");

    // Hide the output
    document.querySelector(".output_keliling").style.visibility = "hidden";
  } else {
    // Condition for length measurement centimeter and meter
    const lengthMeasure = optionLengthKeliling.value;

    if (lengthMeasure === "cm") {
      // Remove error class when showing the result
      formKeliling.classList.remove("error-keliling");

      // Formula Keliling
      const sisiPersegi = Number(inputNumberKeliling.value);
      const result = 4 * sisiPersegi;

      // Showing the result keliling persegi
      showOutputKeliling(".output_keliling", result, lengthMeasure);
    } else {
      // Remove error class when showing the result
      formKeliling.classList.remove("error-keliling");

      // Formula Keliling
      const sisiPersegi = Number(inputNumberKeliling.value);
      const result = 4 * sisiPersegi;

      // Showing the result keliling persegi
      showOutputKeliling(".output_keliling", result, lengthMeasure);
    }
  }
});

// Handling Reset Button Luas Persegi
btnResetLuas.addEventListener("click", function (event) {
  event.preventDefault();

  // Calling the clearUI function for reset button in Luas Persegi
  clearUI(inputNumberLuas, formLuas, ".output_luas", "error-luas");
});

// Handling Reset Button Luas Persegi
btnResetKeliling.addEventListener("click", function (event) {
  event.preventDefault();

  // Calling the clearUI function for reset button in Keliling Persegi
  clearUI(inputNumberKeliling, formKeliling, ".output_keliling", "error-keliling");
});

cosnt;
