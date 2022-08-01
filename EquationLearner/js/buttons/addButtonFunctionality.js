import calculateInitialize from "./calculateInitialize.js";

function addButtonFunctionality() {
  const variableButtons = document.getElementsByClassName("variable");
  addVariableButtonFunctionality(variableButtons);

  const operationButtons = document.getElementsByClassName("operation");
  addOperationButtonFunctionality(operationButtons);

  document
    .getElementById("calculate")
    .addEventListener("click", calculateInitialize);
}

function addVariableButtonFunctionality(variableButtons) {
  for (let i = 0; i < variableButtons.length; i++) {
    variableButtons[i].addEventListener("click", function () {
      document.getElementById("variable").textContent =
        variableButtons[i].textContent;
    });
  }
}

function addOperationButtonFunctionality(operationButtons) {
  for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", function () {
      document.getElementById("operation").textContent =
        operationButtons[i].value;
    });
  }
}

export default addButtonFunctionality;
