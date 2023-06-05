"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const inputName = document.querySelector(".input-modal");
const btnOpenModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const analysisNumber = document.querySelector(".number");
const attitudesContent = document.querySelector(".attitudes");
const resultContent = document.querySelector(".resultContent");
let attitudes ;

//Reading from attitude.txt file and put file's content to attitude class (in index.html)
const path = "attitude.txt";
const readTextFile = async function (path) {
  const resp = await fetch(path);
  const data = await resp.text();
  attitudesContent.innerHTML=data.toString();
  attitudes= attitudesContent.textContent.split("@@");
  //console.log(attitudes);
};
readTextFile(path);
let count = 0;

const openModal = function () {
  //if (inputName.value.length !== 0) {
  const result = calculate(inputName.value);
  if (result != 0) {
    analysisNumber.textContent = result;
    resultContent.textContent = attitudes[result - 1];
  }
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  resultContent.textContent = "TO DISPLAY THE RESULT, PLEASE ENTER YOUR NAME";
  inputName.value = "";
  count = 0;
  analysisNumber.textContent = "0";
};

const arithmeticSum = function (num) {
  if (num <= 0) return 0;
  else if (num > 0 && num < 10) return num;
  num = (num % 10) + Math.floor(num / 10);
  return arithmeticSum(num);
};

const calculate = function (name) {
  const invalidChar = [
    "@",
    "#",
    ".",
    "^",
    ":",
    "~",
    "|",
    "\\",
    "}",
    "{",
    "]",
    "[",
    "½",
    "%",
    "$",
    "+",
    "#",
    "£",
    ">",
    "<",
    "!",
    '"',
    "*",
    ",",
  ];
  const data = [
    " ",
    "ajsş",
    "bkt",
    "cçluü",
    "dmv",
    "eéèênw",
    "foöx",
    "gğpy",
    "hqz",
    "riı",
  ];

  for (const letter of name.toLowerCase()) {
    if (!invalidChar.includes(letter)) {
      for (const [key, value] of data.entries()) {
        if (value.includes(letter)) count += key;
      }
    } else {
      //console.log("Invalid character!!");
      alert("Invalid character in your name");
      return 0;
    }
  }
  return arithmeticSum(count);
};

btnOpenModal.addEventListener("click", openModal);

document.addEventListener("keydown", function (e) {
  if (modal.classList.contains("hidden") && e.key === "Enter") openModal();
});

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("hidden") && e.key === "Escape") closeModal();
});
