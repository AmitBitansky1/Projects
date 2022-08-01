import createRegularEquation from "./regularEquation.js";

import updateEquation from "./updateEquation.js";

import createVariableButtons from "./buttons/createVariableButtons.js";

import addButtonFunctionality from "./buttons/addButtonFunctionality.js";

import createNewEquation from "./newEquation.js";

function initialize() {
  const newEquation = createNewEquation();

  createRegularEquation(
    newEquation[0],
    newEquation[1],
    newEquation[2],
    newEquation[3],
    "regular"
  );

  updateEquation(newEquation, "set");

  createVariableButtons(
    newEquation[0],
    newEquation[1],
    newEquation[2],
    newEquation[3]
  );
}

export default initialize;
