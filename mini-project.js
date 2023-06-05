"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const inputName = document.querySelector(".input-modal");
const btnOpenModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const analysisNumber = document.querySelector(".number");
const attitudesContent = document.querySelector(".attitudes");
const resultContent = document.querySelector(".resultContent");
const attitudes = attitudesContent.textContent.split("@@");