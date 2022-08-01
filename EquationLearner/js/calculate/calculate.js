import createRegularEquation from "../equations/regularEquation.js";

import updateEquation from "../equations/updateEquation.js";

function calculate(operation, num, variableType) {
  if (operation == "add" || operation == "subtract") {
    //Add Negative
    if (operation == "subtract") {
      num *= -1;
      operation = "add";
    }

    createCorrectAdjuster(variableType, num, operation);

    //Normal Subtract
    if (num < 0 && operation == "add") {
      num *= -1;
      operation = "subtract";
    }

    correctUpdateEquation(variableType, num, operation);
  } else {
    createRegularEquation(num, num, num, num, "adjuster", operation);
    updateEquation([num, num, num, num], `operation ${operation}`);
  }
}

function createCorrectAdjuster(variableType, num, operation) {
  if (variableType == "variable")
    createRegularEquation(num, 0, num, 0, "adjuster", operation);
  if (variableType == "constant")
    createRegularEquation(0, num, 0, num, "adjuster", operation);
}

function correctUpdateEquation(variableType, num, operation) {
  if (variableType == "variable")
    updateEquation([num, 0, num, 0], `operation ${operation}`);
  if (variableType == "constant")
    updateEquation([0, num, 0, num], `operation ${operation}`);
}

export default calculate;
