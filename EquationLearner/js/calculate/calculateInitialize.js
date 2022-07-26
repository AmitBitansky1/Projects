import calculate from "./calculate.js";
import Variable from "../MathClass/variables.js";

function calculateInitialize() {
  let operationText = document.getElementById("operation").textContent;
  let variableText = document.getElementById("variable").textContent;

  let type = variableText.includes("x") ? "variable" : "constant";
  let operation = setOperation(operationText);

  variableText = variableIdentityCheck(variableText);
  let variableFloat = variableTextToFloat(variableText, type);

  if (variableFloat < 0 && operation == "subtract") {
    variableFloat *= -1;
    operation = "add";
  }

  calculate(operation, variableFloat, type);
}

function setOperation(operationText) {
  if (operationText == "+") return "add";
  if (operationText == "-") return "subtract";
  if (operationText == "*") return "multiply";
  if (operationText == "/") return "divide";
}

function variableIdentityCheck(variableText) {
  if (variableText == "x") {
    variableText = "1x";
  }
  if (variableText == "-x") {
    variableText = "-1x";
  }
  return variableText;
}

function variableTextToFloat(variableText, type) {
  if (type == "variable")
    return new Variable(parseFloat(variableText.split("x")[0]));
  if (type == "constant") return parseFloat(variableText);
}

export default calculateInitialize;