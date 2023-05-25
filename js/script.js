"use strict";

// Take the html tag
const inputNumberLuas = document.querySelector("#input-sisi-luas");
const inputNumberKeliling = document.querySelector("#input-sisi-keliling");
const btnHitungLuas = document.querySelector(".btn-hitung-luas");
const btnHitungKeliling = document.querySelector(".btn-hitung-keliling");
const btnResetLuas = document.querySelector(".btn-reset-luas");
const btnResetKeliling = document.querySelector(".btn-reset-keliling");
const selectOption = document.querySelector(".list-menu");

// Select dropdown value
selectOption.addEventListener("change", function () {
  const value = selectOption.value;
  //   Check if value same as the option value
  if (value === "keliling") {
    document.querySelector(".keliling-persegi").style.display = "flex";
    document.querySelector(".luas-persegi").style.display = "none";
    //   Check if value same as the option value
  } else if (value === "luas") {
    document.querySelector(".luas-persegi").style.display = "flex";
    document.querySelector(".keliling-persegi").style.display = "none";
  }
});

// Handling Hitung Luas button
btnHitungLuas.addEventListener("click", function (event) {
  event.preventDefault();

  // Check if input is empty
  if (inputNumberLuas.value === "") {
    // Validation if input is empty
    const formContainer = document.querySelector(".form-container");
    formContainer.classList.add("error");

    const smallMessage = document.querySelector("small");
    smallMessage.textContent = "Input tidak boleh kosong";
  } else if (!/^[0-9]+$/.test(inputNumberLuas.value)) {
    // Validation if input is not a number
    const formContainer = document.querySelector(".form-container");
    formContainer.classList.add("error");

    const smallMessage = document.querySelector("small");
    smallMessage.innerText = "Hanya menerima angka!";
    document.querySelector(".output_luas").style.visibility = "hidden";
  } else {
    document.querySelector(".form-container").classList.remove("error");
    const sisiPersegi = Number(inputNumberLuas.value);

    // Formula Luas
    const result = sisiPersegi * sisiPersegi;

    document.querySelector(".output_luas").style.visibility = "visible";
    document.querySelector(".hasil-luas").innerHTML = `Luas = ${result} cm<sup>2</sup>`;
  }
});

// Handling Hitung Keliling button
btnHitungKeliling.addEventListener("click", function (event) {
  event.preventDefault();

  // Check if input is empty
  if (inputNumberKeliling.value === "") {
    // Validation if input is empty
    const formContainer = document.querySelector(".form-container-keliling");
    formContainer.classList.add("error-keliling");

    const smallMessage = document.querySelector(".small-keliling");
    smallMessage.textContent = "Input tidak boleh kosong";
  } else if (!/^[0-9]+$/.test(inputNumberKeliling.value)) {
    // Validation if input is not a number
    const formContainer = document.querySelector(".form-container-keliling");
    formContainer.classList.add("error-keliling");

    const smallMessage = document.querySelector(".small-keliling");
    smallMessage.innerText = "Hanya menerima angka!";
    document.querySelector(".output_keliling").style.visibility = "hidden";
  } else {
    document.querySelector(".form-container-keliling").classList.remove("error-keliling");
    const sisiPersegi = Number(inputNumberKeliling.value);

    // Formula Luas
    const result = 4 * sisiPersegi;

    document.querySelector(".output_keliling").style.visibility = "visible";
    document.querySelector(".hasil-keliling").textContent = `Keliling = ${result} cm`;
  }
});

// Handling Reset Button Luas Persegi
btnResetLuas.addEventListener("click", function (event) {
  event.preventDefault();
  inputNumberLuas.value = "";
  document.querySelector(".output_luas").style.visibility = "hidden";
  document.querySelector(".form-container").classList.remove("error");
});

// Handling Reset Button Luas Persegi
btnResetKeliling.addEventListener("click", function (event) {
  event.preventDefault();
  inputNumberKeliling.value = "";
  document.querySelector(".output_keliling").style.visibility = "hidden";
  document.querySelector(".form-container-keliling").classList.remove("error-keliling");
});
