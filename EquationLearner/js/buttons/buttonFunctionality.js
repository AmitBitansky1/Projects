import calculateInitialize from "./calculateInitialize.js";

function buttonFunctionality() {
  const variableButtons = document.getElementsByClassName("variable");
  for (let i = 0; i < variableButtons.length; i++) {
    variableButtons[i].addEventListener("click", function () {
      document.getElementById("variable").textContent =
        variableButtons[i].textContent;
    });
  }
  const operationButtons = document.getElementsByClassName("operation");
  for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", function () {
      document.getElementById("operation").textContent =
        operationButtons[i].value;
    });
  }
  document
    .getElementById("calculate")
    .addEventListener("click", calculateInitialize);
}
export default buttonFunctionality;
