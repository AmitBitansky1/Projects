import createEquation from "./equations/createEquation.js";

import updateEquation from "./equations/updateEquation.js";

import createVariableButtons from "./buttons/createVariableButtons.js";

import createRandomEquation from "./equations/createRandomEquation.js";

function initialize() {
  const randomEquation = createRandomEquation();

  createEquation(
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
