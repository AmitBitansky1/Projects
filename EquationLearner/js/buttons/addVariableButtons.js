function addVariableButtons(variableButtons, variableTexts) {
  const variablesDiv = document.getElementById("variables");
  emptyVariablesDiv(variablesDiv);

  for (let i = 0; i < variableButtons.length; i++) {
    if (variableTexts[i] != 0) variablesDiv.appendChild(variableButtons[i]);
  }
}

function emptyVariablesDiv(variablesDiv) {
  while (variablesDiv.firstChild) {
    variablesDiv.removeChild(variablesDiv.firstChild);
  }
}

export default addVariableButtons;
