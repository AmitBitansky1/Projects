import createRegularEquation from "./regularEquation.js";

let equation = [0, 0, 0, 0];

function updateEquation(newEquation, method = "") {
  if (method == "set") {
    equation[0] = newEquation[0];
    equation[1] = newEquation[1];
    equation[2] = newEquation[2];
    equation[3] = newEquation[3];
  }
  if (method == "get") {
    return equation;
  }
  if (method.includes("operation")) {
    if (method.includes("add")) {
      equation[0] += newEquation[0];
      equation[1] += newEquation[1];
      equation[2] += newEquation[2];
      equation[3] += newEquation[3];
    }
    if (method.includes("subtract")) {
      equation[0] -= newEquation[0];
      equation[1] -= newEquation[1];
      equation[2] -= newEquation[2];
      equation[3] -= newEquation[3];
    }
    if (method.includes("multiply")) {
      equation[0] *= newEquation[0];
      equation[1] *= newEquation[1];
      equation[2] *= newEquation[2];
      equation[3] *= newEquation[3];
    }
    if (method.includes("divide")) {
      if (equation[0] != 0) equation[0] /= newEquation[0];
      if (equation[1] != 0) equation[1] /= newEquation[1];
      if (equation[2] != 0) equation[2] /= newEquation[2];
      if (equation[3] != 0) equation[3] /= newEquation[3];
    }
    createRegularEquation(
      Math.floor(equation[0] * 100) / 100,
      Math.floor(equation[1] * 100) / 100,
      Math.floor(equation[2] * 100) / 100,
      Math.floor(equation[3] * 100) / 100,
      "regular"
    );
    createVariableButtons(
      Math.floor(equation[0] * 100) / 100,
      Math.floor(equation[1] * 100) / 100,
      Math.floor(equation[2] * 100) / 100,
      Math.floor(equation[3] * 100) / 100
    );
  }
  if (
    (equation[0] == 1 && equation[1] == 0 && equation[2] == 0) ||
    (equation[0] == 0 && equation[2] == 1 && equation[3] == 0)
  ) {
    document.getElementById("solved").textContent = "YOU SOLVED THE EQUATION!";
  }
}

export default updateEquation;
