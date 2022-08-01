import createRegularEquation from "../equations/regularEquation.js";

import updateEquation from "../equations/updateEquation.js";

function calculate(operation, num, variableType) {
  const prevVar2 = document.getElementById("variable2");
  if (operation == "subtract") {
    num *= -1;
    operation = "add";
  }
  if (variableType == "variable") {
    if (operation == "add" || operation == "subtract") {
      createRegularEquation(num, 0, num, 0, "adjuster", operation);
      if (num < 0 && operation == "add") {
        num *= -1;
        operation = "subtract";
      }
      updateEquation([num, 0, num, 0], `operation ${operation}`);
    } else {
      createRegularEquation(num, num, num, num, "adjuster", operation);
      updateEquation([num, num, num, num], `operation ${operation}`);
    }
  }
  if (variableType == "constant") {
    if (operation == "add" || operation == "subtract") {
      createRegularEquation(0, num, 0, num, "adjuster", operation);
      if (num < 0 && operation == "add") {
        num *= -1;
        operation = "subtract";
      }
      updateEquation([0, num, 0, num], `operation ${operation}`);
    } else {
      createRegularEquation(num, num, num, num, "adjuster", operation);
      updateEquation([num, num, num, num], `operation ${operation}`);
    }
  }
}

export default calculate;
