import buttonFunctionality from "./buttonFunctionality.js";

function setButtonAttributes(buttonElement) {
  buttonElement.classList.add("variable");
  buttonElement.classList.add("equationButton");
}

function setButtonText(buttonElement, text) {
  if (text == "1x") text = "x";
  if (text == "-1x") text = "-x";
  buttonElement.textContent = text;
}

function createVariableButtons(variable1, constant1, variable2, constant2) {
  const variablesDiv = document.getElementById("variables");
  let var1Button;
  let const1Button;
  let var2Button;
  let const2Button;

  while (variablesDiv.firstChild) {
    variablesDiv.removeChild(variablesDiv.firstChild);
  }
  var1Button = document.createElement("button");
  setButtonAttributes(var1Button);
  var1Button.setAttribute("id", "variable1");
  const1Button = document.createElement("button");
  setButtonAttributes(const1Button);
  const1Button.setAttribute("id", "constant1");
  var2Button = document.createElement("button");
  setButtonAttributes(var2Button);
  var2Button.setAttribute("id", "variable2");
  const2Button = document.createElement("button");
  setButtonAttributes(const2Button);
  const2Button.setAttribute("id", "constant2");

  if (variable1 < 0) variable1 *= -1;
  if (constant1 < 0) constant1 *= -1;
  if (variable2 < 0) variable2 *= -1;
  if (constant2 < 0) constant2 *= -1;
  setButtonText(var1Button, `${variable1}x`);
  setButtonText(const1Button, constant1);
  setButtonText(var2Button, `${variable2}x`);
  setButtonText(const2Button, constant2);

  var1Button.value = variable1;
  const1Button.value = constant1;
  var2Button.value = variable2;
  const2Button.value = constant2;

  if (variable1 != 0) variablesDiv.appendChild(var1Button);
  if (constant1 != 0) variablesDiv.appendChild(const1Button);
  if (variable2 != 0) variablesDiv.appendChild(var2Button);
  if (constant2 != 0) variablesDiv.appendChild(const2Button);

  buttonFunctionality();
}

export default createVariableButtons;
