import createEquation from "../equations/createEquation.js";
import updateEquation from "../equations/updateEquation.js";

import Variable from "../MathClass/variables.js";
import Fraction from "../MathClass/fraction.js";

function calculate(operation, variable, variableType) {
  let num = variable?.isVariable ? variable.coefficient : variable;
  if (operation == "add" || operation == "subtract") {
    //Add Negative
    if (operation == "subtract") {
      num *= -1;
      operation = "add";
    }
    createCorrectAdjuster(variableType, num, operation);

    correctUpdateEquation(variableType, num, operation);
  } else {
    createEquation(num, num, num, num, "adjuster", operation);
    updateEquation([num, num, num, num], `operation ${operation}`);
  }
}

function createCorrectAdjuster(variableType, num, operation) {
  if (variableType == "variable")
    createEquation(
      new Variable(num),
      0,
      new Variable(num),
      0,
      "adjuster",
      operation
    );
  if (variableType == "constant")
    createEquation(0, num, 0, num, "adjuster", operation);
}

function correctUpdateEquation(variableType, num, operation) {
  if (variableType == "variable")
    updateEquation(
      [
        new Fraction(new Variable(num), 1),
        new Fraction(0, 1),
        new Fraction(new Variable(num), 1),
        new Fraction(0, 1),
      ],
      `operation ${operation}`
    );
  if (variableType == "constant")
    updateEquation(
      [
        new Fraction(0, 1),
        new Fraction(num, 1),
        new Fraction(0, 1),
        new Fraction(num, 1),
      ],
      `operation ${operation}`
    );
}

export default calculate;
