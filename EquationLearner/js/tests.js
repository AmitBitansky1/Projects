import createRegularEquation from "./equations/regularEquation.js";

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

const tests = [testOne(), testTwo()];

export default tests;
