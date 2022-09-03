import GCD from "./gcd.js";
import LCM from "./lcm.js";
import Variable from "./variables.js";

class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
    if (this.denominator < 0) {
      if (this.numerator?.isVariable) {
        this.numerator.multiply(-1);
      } else {
        this.numerator *= -1;
      }
      if (this.denominator?.isVariable) {
        this.denominator.multiply(-1);
      } else {
        this.denominator *= -1;
      }
    }
    if (this.numerator > 0 || this.numerator.isPositive) {
      this.isPositive = true;
    } else {
      this.isPositive = false;
    }
    this.isFraction = true;
  }
  static isFraction(fraction) {
    if (fraction?.isFraction) return true;
    return false;
  }
  reduce() {
    const gcd = this.numerator?.isVariable
      ? GCD(this.numerator.coefficient, this.denominator)
      : GCD(this.numerator, this.denominator);
    if (gcd != 0) {
      if (this.numerator?.isVariable) {
        this.numerator.divide(gcd);
      } else {
        this.numerator /= gcd;
      }
      if (this.denominator?.isVariable) {
        this.denominator.divide(gcd);
      } else {
        this.denominator /= gcd;
      }
    }
  }
  add(fraction) {
    if (!fraction?.isFraction) fraction = new Fraction(fraction, 1);
    if (fraction.numerator?.coefficient == 0 || fraction.numerator == 0) return;
    if (this.denominator != fraction.denominator) {
      console.log(this.denominator);
      console.log(fraction.denominator);
      let lcm = LCM(this.denominator, fraction.denominator);
      let thisMultiplier = lcm / this.denominator;
      let fractionMultiplier = lcm / fraction.denominator;
      if (this.numerator?.isVariable) {
        this.numerator.coefficient =
          this.numerator.coefficient * thisMultiplier +
          fraction.numerator.coefficient * fractionMultiplier;
      } else {
        this.numerator =
          this.numerator * thisMultiplier +
          fraction.numerator * fractionMultiplier;
      }
      this.denominator = lcm;
      this.reduce();
    }
    if (this.numerator?.isVariable) {
      this.numerator.coefficient += fraction.numerator.coefficient;
    } else {
      this.numerator += fraction.numerator;
    }
    this.reduce();
  }
  multiply(numerator, denominator = 1) {
    if (this.numerator?.isVariable) {
      this.numerator.coefficient *= numerator;
    } else {
      this.numerator *= numerator;
    }
    this.reduce();
  }
  divide(fraction) {
    if (Number.isInteger(fraction)) fraction = new Fraction(1, fraction);
    this.denominator *= fraction.denominator;
    this.reduce();
  }

  toString() {
    let numeratorString = this.numerator.toString();
    if (numeratorString == "1x") numeratorString = "x";
    if (numeratorString == "-1x") numeratorString = "-x";
    if (numeratorString == "0x") return "";
    if (this.denominator == 1) return numeratorString;
    return `\\(\\frac{${numeratorString}}{${this.denominator}}\\)`;
  }
  toDecimalString() {
    let numDecimalPlaces = 0;
    let answerSymbol = `≈`;
    if (((this.numerator / this.denominator) * 10000) % 1000 == 0) {
      numDecimalPlaces = 1;
      answerSymbol = `=`;
    } else if (((this.numerator / this.denominator) * 10000) % 100 == 0) {
      numDecimalPlaces = 2;
      answerSymbol = `=`;
    } else if (((this.numerator / this.denominator) * 10000) % 10 == 0) {
      numDecimalPlaces = 3;
      answerSymbol = `=`;
    } else {
      numDecimalPlaces = 3;
    }
    return `${answerSymbol} ${(this.numerator / this.denominator).toFixed(
      numDecimalPlaces
    )}`;
  }
}

export default Fraction;
