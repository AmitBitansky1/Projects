import createRegularEquation from "./regularEquation.js";

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
    createEquation();
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
  equation[0] += newEquation[0];
  equation[1] += newEquation[1];
  equation[2] += newEquation[2];
  equation[3] += newEquation[3];
}

function subtractEquation(newEquation) {
  equation[0] -= newEquation[0];
  equation[1] -= newEquation[1];
  equation[2] -= newEquation[2];
  equation[3] -= newEquation[3];
}

function multiplyEquation(newEquation) {
  equation[0] *= newEquation[0];
  equation[1] *= newEquation[1];
  equation[2] *= newEquation[2];
  equation[3] *= newEquation[3];
}

function divideEquation(newEquation) {
  if (equation[0] != 0) equation[0] /= newEquation[0];
  if (equation[1] != 0) equation[1] /= newEquation[1];
  if (equation[2] != 0) equation[2] /= newEquation[2];
  if (equation[3] != 0) equation[3] /= newEquation[3];
}

function createEquation() {
  createRegularEquation(
    Math.floor(equation[0] * 100) / 100,
    Math.floor(equation[1] * 100) / 100,
    Math.floor(equation[2] * 100) / 100,
    Math.floor(equation[3] * 100) / 100,
    "regular"
  );
}

function createAllVariableButtons() {
  createVariableButtons(
    Math.floor(equation[0] * 100) / 100,
    Math.floor(equation[1] * 100) / 100,
    Math.floor(equation[2] * 100) / 100,
    Math.floor(equation[3] * 100) / 100
  );
}

function isXIsolated() {
  if (
    (equation[0] == 1 && equation[1] == 0 && equation[2] == 0) ||
    (equation[0] == 0 && equation[2] == 1 && equation[3] == 0)
  )
    return true;
  return false;
}

export default updateEquation;
