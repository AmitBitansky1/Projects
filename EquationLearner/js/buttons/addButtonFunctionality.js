import calculateInitialize from "./calculateInitialize.js";

function addButtonFunctionality() {
  const variableButtons = document.getElementsByClassName("variable");
  addVariableButtonFunctionality(variableButtons);

  const operationButtons = document.getElementsByClassName("operation");
  addOperationButtonFunctionality(operationButtons);

  const calculateButton = document.getElementById("calculate");
  addCalculateButtonFunctionality(calculateButton);
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

function addCalculateButtonFunctionality(calculateButton) {
  calculateButton.addEventListener("click", calculateInitialize);
}

export default addButtonFunctionality;
