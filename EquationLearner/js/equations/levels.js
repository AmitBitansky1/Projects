import Variable from "../MathClass/variables.js";
import Fraction from "../MathClass/fraction.js";

function equationLevel(level) {
  switch (parseInt(level)) {
    case 1:
      return levelOne();
    case 2:
      return levelTwo();
    case 3:
      return levelThree();
    case 4:
      return levelFour();
  }
}

export default equationLevel;

//One Step Adding and Subtracting
function levelOne() {
  let constant1 = new Fraction(Math.floor(Math.random() * 41 - 20), 1);
  while (constant1.numerator == 0)
    constant1 = new Fraction(Math.floor(Math.random() * 41 - 20), 1);
  let constant2 = new Fraction(Math.floor(Math.random() * 41 - 20), 1);
  while (constant2.numerator == 0 || constant1.numerator == constant2.numerator)
    constant2 = new Fraction(Math.floor(Math.random() * 41 - 20), 1);

  return [
    new Fraction(new Variable(1), 1),
    constant1,
    new Fraction(0, 1),
    constant2,
  ];
}

//One Step Multiplying and Dividing
function levelTwo() {
  let type = Math.floor(Math.random() * 2) == 1 ? "multiply" : "divide";
  if (type == "multiply") {
    let variable1 = new Fraction(
      new Variable(Math.floor(Math.random() * 9 + 2)),
      1
    );
    let constant2 = new Fraction(Math.floor(Math.random() * 41) - 20, 1);
    while (constant2.numerator == 0)
      constant2 = new Fraction(Math.floor(Math.random() * 41) - 20, 1);

    console.log([variable1, new Fraction(0, 1), new Fraction(0, 1), constant2]);
    return [variable1, new Fraction(0, 1), new Fraction(0, 1), constant2];
  } else {
    let variable1 = new Fraction(
      new Variable(1),
      Math.floor(Math.random() * 11)
    );
    while (variable1.denominator == 0 || variable1.denominator == 1)
      variable1 = new Fraction(new Variable(1), Math.floor(Math.random() * 11));
    let constant2 = new Fraction(Math.floor(Math.random() * 21) - 10, 1);

    return [variable1, new Fraction(0, 1), new Fraction(0, 1), constant2];
  }
}

//Two-Step Integer & Fractional Coefficient and Two Constants
function levelThree() {
  let constant1 = new Fraction(Math.floor(Math.random() * 41 - 20), 1);
  while (constant1.numerator == 0)
    constant1 = new Fraction(Math.floor(Math.random() * 41 - 20), 1);
  let constant2 = new Fraction(Math.floor(Math.random() * 41 - 20), 1);
  while (constant2.numerator == 0 || constant1.numerator == constant2.numerator)
    constant2 = new Fraction(Math.floor(Math.random() * 41 - 20), 1);

  let type = Math.floor(Math.random() * 2) == 1 ? "multiply" : "divide";
  if (type == "multiply") {
    let variable1 = new Fraction(
      new Variable(Math.floor(Math.random() * 9 + 2)),
      1
    );
    return [variable1, constant1, new Fraction(0, 1), constant2];
  } else {
    let variable1 = new Fraction(
      new Variable(1),
      Math.floor(Math.random() * 11)
    );
    while (variable1.denominator == 0 || variable1.denominator == 1)
      variable1 = new Fraction(new Variable(1), Math.floor(Math.random() * 11));
    return [variable1, constant1, new Fraction(0, 1), constant2];
  }
}

function levelFour() {
  let variable1 = new Fraction(
    new Variable(Math.floor(Math.random() * 21 - 10)),
    1
  );
  while (variable1.numerator.coefficient == 0) {
    variable1 = new Fraction(
      new Variable(Math.floor(Math.random() * 21 - 10)),
      1
    );
  }
  let variable2 = new Fraction(
    new Variable(Math.floor(Math.random() * 21 - 10)),
    1
  );
  while (
    variable1.numerator.coefficient == variable2.numerator.coefficient ||
    variable2.numerator.coefficient == 0
  ) {
    variable2 = new Fraction(
      new Variable(Math.floor(Math.random() * 21 - 10)),
      1
    );
  }
  let constant1 = new Fraction(Math.floor(Math.random() * 21 - 10), 1);
  while (constant1.numerator == 0)
    constant1 = new Fraction(Math.floor(Math.random() * 21 - 10), 1);
  let constant2 = new Fraction(Math.floor(Math.random() * 21 - 10), 1);
  while (constant2.numerator == 0)
    constant2 = new Fraction(Math.floor(Math.random() * 21 - 10), 1);
  return [variable1, constant1, variable2, constant2];
}
