import addButtonFunctionality from "./addButtonFunctionality.js";

import addVariableButtons from "./addVariableButtons.js";

import Variable from "../MathClass/variables.js";

function createVariableButtons(variable1, constant1, variable2, constant2) {
  let variableButtons = [];
  let variableTexts = [];

  let var1NumeratorButton = createAndSetVariableButton(
    "variable1Numerator",
    variable1.numerator?.isVariable
      ? new Variable(variable1.numerator.abs()).toString()
      : Math.abs(variable1.numerator).toString(),
    "variable"
  );
  if (
    (variable1.numerator?.isVariable == true &&
      variable1.numerator.coefficient != 0) ||
    (!variable1.numerator?.isVariable && variable1.numerator != 0)
  ) {
    variableButtons.push(var1NumeratorButton);
    variableTexts.push(variable1.numerator.toString());
  }
  let var1DenominatorButton = createAndSetVariableButton(
    "variable1Denominator",
    variable1.denominator,
    "variable"
  );
  if (
    (variable1.denominator?.isVariable &&
      variable1.denominator.coefficient != 1) ||
    variable1.denominator != 1
  ) {
    variableButtons.push(var1DenominatorButton);
    variableTexts.push(variable1.denominator);
  }
  let const1Button = createAndSetVariableButton(
    "constant1",
    Math.abs(constant1),
    "constant"
  );
  if (true) {
    variableButtons.push(const1Button);
    variableTexts.push(constant1);
  }
  let var2NumeratorButton = createAndSetVariableButton(
    "variable2Numerator",
    variable2.numerator?.isVariable
      ? new Variable(variable2.numerator.abs()).toString()
      : Math.abs(variable2.numerator).toString(),
    "variable"
  );
  if (
    (variable2.numerator?.isVariable == true &&
      variable2.numerator.coefficient != 0) ||
    (!variable1.numerator?.isVariable && variable1.numerator != 0)
  ) {
    variableButtons.push(var2NumeratorButton);
    variableTexts.push(variable2.numerator.toString());
  }
  let var2DenominatorButton = createAndSetVariableButton(
    "variable2Denominator",
    variable2.denominator,
    "variable"
  );
  if (
    (variable2.denominator?.isVariable &&
      variable2.denominator.coefficient != 1) ||
    variable2.denominator != 1
  ) {
    variableButtons.push(var2DenominatorButton);
    variableTexts.push(variable2.denominator);
  }

  let const2Button = createAndSetVariableButton(
    "constant2",
    Math.abs(constant2.numerator),
    "constant"
  );
  if (true) {
    variableButtons.push(const2Button);
    variableTexts.push(constant2.numerator);
  }

  addVariableButtons(variableButtons, variableTexts);

  addButtonFunctionality();
}

function setButtonAttributes(buttonElement) {
  buttonElement.classList.add("variable");
  buttonElement.classList.add("equationButton");
}

function setButtonText(buttonElement, text, type) {
  text = text.toString();
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
