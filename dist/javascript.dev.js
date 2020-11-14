"use strict";

var codes = document.getElementById("codes");
var run = document.getElementById("run");
var remove = document.getElementById("remove");
var result = document.getElementById("result");

run.onclick = function () {
  result.innerHTML = codes.value;
  localStorage.setItem("RESULT", codes.value);
};

remove.onclick = function () {
  result.innerHTML = "";
};

onload = function onload() {
  codes.value = localStorage.getItem("RESULT");
  result.innerHTML = codes.value;
};