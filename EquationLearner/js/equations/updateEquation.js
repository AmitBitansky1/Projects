import createEquation from "./createEquation.js";

import createVariableButtons from "../buttons/createVariableButtons.js";

let equation = [0, 0, 0, 0];

function updateEquation(newEquation, method = "") {
  if (method == "set") {
    setEquation(newEquation);
  }
  if (method == "get") {
    return equation;
  }
  if (method.includes("operation")) {
    if (method.includes("add")) {
      addEquation(newEquation);
    }
    if (method.includes("subtract")) {
      subtractEquation(newEquation);
    }
    if (method.includes("multiply")) {
      multiplyEquation(newEquation);
    }
    if (method.includes("divide")) {
      divideEquation(newEquation);
    }
    createNewEquation();
    createAllVariableButtons();
  }
  if (isXIsolated()) {
    document.getElementById("solved").textContent = "YOU SOLVED THE EQUATION!";
  }
}

function setEquation(newEquation) {
  equation[0] = newEquation[0];
  equation[1] = newEquation[1];
  equation[2] = newEquation[2];
  equation[3] = newEquation[3];
}

function addEquation(newEquation) {
  equation[0].add(newEquation[0]);
  equation[1].add(newEquation[1]);
  equation[2].add(newEquation[2]);
  equation[3].add(newEquation[3]);
}

function subtractEquation(newEquation) {
  equation[0].add(newEquation[0]);
  equation[1].add(newEquation[1]);
  equation[2].add(newEquation[2]);
  equation[3].add(newEquation[3]);
}

function multiplyEquation(newEquation) {
  equation[0].multiply(newEquation[0]);
  equation[1].multiply(newEquation[1]);
  equation[2].multiply(newEquation[2]);
  equation[3].multiply(newEquation[3]);
}

function divideEquation(newEquation) {
  if (equation[0] != 0) equation[0].divide(newEquation[0]);
  if (equation[1] != 0) equation[1].divide(newEquation[1]);
  if (equation[2] != 0) equation[2].divide(newEquation[2]);
  if (equation[3] != 0) equation[3].divide(newEquation[3]);
}

function createNewEquation() {
  createEquation(equation[0], equation[1], equation[2], equation[3], "regular");
}

function createAllVariableButtons() {
  createVariableButtons(equation[0], equation[1], equation[2], equation[3]);
}

function isXIsolated() {
  console.log(equation);
  if (
    (equation[0].numerator.coefficient == 1 &&
      equation[0].denominator == 1 &&
      equation[1].numerator == 0 &&
      (equation[2].numerator == 0 || equation[2].numerator.coefficient == 0)) ||
    (equation[0].numerator == 0 &&
      equation[2].numerator.coefficient == 1 &&
      equation[2].denominator == 1 &&
      equation[3] == 0)
  )
    return true;
  return false;
}

export default updateEquation;
