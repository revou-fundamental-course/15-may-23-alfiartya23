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
btnHitungLuas.addEventListener("click", function () {
  // Check if input is empty
  if (inputNumberLuas.value === "") {
    alert("Input angka dulu ya");
  } else {
    const sisiPersegi = Number(inputNumberLuas.value);

    // Formula Luas
    const result = sisiPersegi * sisiPersegi;

    document.querySelector(".output_luas").style.visibility = "visible";
    document.querySelector(".hasil-luas").textContent = `L = ${result}`;
  }
});

// Handling Hitung Keliling button
btnHitungKeliling.addEventListener("click", function () {
  // Check if input is empty
  if (inputNumberKeliling.value === "") {
    alert("Input angka dulu ya");
  } else {
    const sisiPersegi = Number(inputNumberKeliling.value);

    // Formula Keliling
    const result = 4 * sisiPersegi;

    document.querySelector(".output_keliling").style.visibility = "visible";
    document.querySelector(".hasil-keliling").textContent = `K = ${result}`;
  }
});

// Handling Reset Button Luas Persegi
btnResetLuas.addEventListener("click", function () {
  inputNumberLuas.value = "";
  document.querySelector(".output_luas").style.visibility = "hidden";
});

// Handling Reset Button Luas Persegi
btnResetKeliling.addEventListener("click", function () {
  inputNumberKeliling.value = "";
  document.querySelector(".output_keliling").style.visibility = "hidden";
});
