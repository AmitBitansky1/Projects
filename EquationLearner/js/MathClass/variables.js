class Variable {
  constructor(coefficient) {
    this.coefficient = coefficient;
    this.isVariable = true;
    this.isPositive = this.coefficient >= 0;
  }
  static isVariable(variable) {
    if (variable?.isVariable) return true;
    return false;
  }
  multiply(constant) {
    this.coefficient *= constant;
  }
  divide(constant) {
    this.coefficient /= constant;
  }
  abs() {
    return Math.abs(this.coefficient);
  }
  toString() {
    return `${this.coefficient}x`;
  }
  toNumber() {
    return this.coefficient;
  }
}

export default Variable;
