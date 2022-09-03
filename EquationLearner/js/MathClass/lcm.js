import GCD from "./gcd.js";
function LCM(num1, num2) {
  return (num1 / GCD(num1, num2)) * num2;
}

export default LCM;
