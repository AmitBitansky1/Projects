import createRegularEquation from "./regularEquation.js";

import createNewEquation from "./newEquation.js";

import createVariableButtons from "./buttons/setVariableButtons.js";

import buttonFunctionality from "./buttons/buttonFunctionality.js";
import updateEquation from "./updateEquation.js";

const newEquation = createNewEquation();

function testOne() {
  createRegularEquation(1, 3, 0, 7, "regular");
  createRegularEquation(0, -3, 0, -3, "adjuster", 0);
  createRegularEquation(1, 0, 0, 4, "regular");
}
function testTwo() {
  createRegularEquation(2, 0, 1, 7, "regular", 0);
  createRegularEquation(-1, 0, -1, 0, "adjuster", 1);
  createRegularEquation(1, 0, 0, 7, "regular", 0);
}

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

buttonFunctionality();
