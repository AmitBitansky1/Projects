import createRegularEquation from "./equations/regularEquation.js";

import updateEquation from "./equations/updateEquation.js";

import createVariableButtons from "./buttons/createVariableButtons.js";

import addButtonFunctionality from "./buttons/addButtonFunctionality.js";

import createRandomEquation from "./equations/createRandomEquation.js";

function initialize() {
  const randomEquation = createRandomEquation();

  createRegularEquation(
    randomEquation[0],
    randomEquation[1],
    randomEquation[2],
    randomEquation[3],
    "regular"
  );

  updateEquation(randomEquation, "set");

  createVariableButtons(
    randomEquation[0],
    randomEquation[1],
    randomEquation[2],
    randomEquation[3]
  );
}

export default initialize;
