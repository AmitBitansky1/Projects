import calculate from "../calculate.js";

function calculateInitialize() {
  let operationText = document.getElementById("operation").textContent;
  let variableText = document.getElementById("variable").textContent;

  let type = variableText.includes("x") ? "variable" : "constant";

  let operation;
  if (operationText == "+") operation = "add";
  if (operationText == "-") operation = "subtract";
  if (operationText == "x") operation = "multiply";
  if (operationText == "/") operation = "divide";

  let newVariableText;
  if (type == "variable")
    if (variableText == "x") {
      variableText = "1x";
    }
  if (variableText == "-x") {
    variableText = "-1x";
  }
  newVariableText = parseFloat(variableText.split("x")[0]);
  if (type == "constant") newVariableText = parseFloat(variableText);

  if (newVariableText < 0) {
    if (operation == "subtract") {
      newVariableText *= -1;
      operation = "add";
    }
  }

  calculate(operation, newVariableText, type);
}

export default calculateInitialize;
