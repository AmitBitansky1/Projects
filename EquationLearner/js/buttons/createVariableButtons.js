import addButtonFunctionality from "./addButtonFunctionality.js";

import addVariableButtons from "./addVariableButtons.js";

function createVariableButtons(variable1, constant1, variable2, constant2) {
  let var1Button = createAndSetVariableButton(
    "variable1",
    Math.abs(variable1),
    "variable"
  );
  let const1Button = createAndSetVariableButton(
    "constant1",
    Math.abs(constant1),
    "constant"
  );
  let var2Button = createAndSetVariableButton(
    "variable2",
    Math.abs(variable2),
    "variable"
  );
  let const2Button = createAndSetVariableButton(
    "constant2",
    Math.abs(constant2),
    "constant"
  );

  let variableButtons = [var1Button, const1Button, var2Button, const2Button];
  let variableTexts = [variable1, constant1, variable2, constant2];
  addVariableButtons(variableButtons, variableTexts);

  addButtonFunctionality();
}

function setButtonAttributes(buttonElement) {
  buttonElement.classList.add("variable");
  buttonElement.classList.add("equationButton");
}

function setButtonText(buttonElement, text, type) {
  if (type == "variable") text = `${text}x`;
  if (text == "1x") text = "x";
  if (text == "-1x") text = "-x";
  buttonElement.textContent = text;
}

function createVariableButton(variableName) {
  let newVariable = document.createElement("button");
  setButtonAttributes(newVariable);
  newVariable.setAttribute("id", variableName);
  return newVariable;
}

function addButtonTextAndValue(variableButton, variableText, variableType) {
  setButtonText(variableButton, variableText, variableType);
  variableButton.value = variableText;
}

function createAndSetVariableButton(variableName, variableText, variableType) {
  let newButton = createVariableButton(variableName);
  addButtonTextAndValue(newButton, variableText, variableType);
  return newButton;
}

export default createVariableButtons;
