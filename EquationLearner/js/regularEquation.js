import updateEquation from "./updateEquation.js";

function createRegularEquationElement(cell, section) {
  cell.classList.add("equationBody");
  cell.classList.add(section);
}
function createAdjusterEquationElement(cell, section) {
  cell.classList.add("equationAdjuster");
  cell.classList.add(section);
}

function createEquationElement(cell, section, typeEquation) {
  if (typeEquation == "regular")
    return createRegularEquationElement(cell, section);
  if (typeEquation == "adjuster")
    return createAdjusterEquationElement(cell, section);
}

function createEquationString(
  variable,
  constant,
  type,
  typeEquation,
  typeOperation
) {
  let prevEquation = updateEquation([0, 0, 0, 0], "get");
  let prevVar1;
  let prevConst1;
  let prevVar2;
  let prevConst2;
  if (prevEquation != [0, 0, 0, 0]) {
    prevVar1 = prevEquation[0];
    prevConst1 = prevEquation[1];
    prevVar2 = prevEquation[2];
    prevConst2 = prevEquation[3];
  }

  if (type == "variable") {
    if (
      variable == 0 ||
      typeOperation == "divide" ||
      typeOperation == "multiply"
    )
      return "";
    if (variable == 1 && typeEquation == "adjuster") return ` +x`;
    if (variable == 1) return ` x`;
    if (variable == -1) return `-x`;
    if (typeEquation == "adjuster" && variable > 0) return `+${variable}x`;
    if (variable > 1) return ` ${variable}x`;
    return `${variable}x`;
  }
  if (type == "constant") {
    if (
      (constant == 0 && variable != 0) ||
      typeOperation == "divide" ||
      typeOperation == "multiply"
    )
      return "";
    if (
      typeEquation == "adjuster" &&
      constant > 0 &&
      (prevVar1 != 0 || prevVar2 != 0)
    )
      return `+${constant}`;
    if (typeEquation == "adjuster" && constant < 0) return `${constant}`;
    if (constant >= 0) return ` ${constant}`;
    if (
      typeEquation == "adjuster" ||
      (typeEquation == "regular" && variable != 0)
    )
      constant *= -1;
    return `${constant}`;
  }
  if (type == "operation") {
    if (
      (variable == 0 || constant == 0) &&
      (typeEquation == "regular" || typeEquation == "adjuster")
    )
      return "";
    if (constant > 0 && typeOperation == "divide") return ` /${constant}`;
    if (variable > 0 && typeOperation == "divide") return ` /${variable}`;
    if (constant > 0 && typeOperation == "multiply") return ` *${constant}`;
    if (variable > 0 && typeOperation == "multiply") return ` *${variable}`;
    if (constant > 0) return ` + `;
    return ` - `;
  }
}

function createRegularEquation(
  variable1,
  constant1,
  variable2,
  constant2,
  typeEquation,
  typeOperation
) {
  let prevEquation = updateEquation([0, 0, 0, 0], "get");
  let prevVar1;
  let prevConst1;
  let prevVar2;
  let prevConst2;
  if (prevEquation != [0, 0, 0, 0]) {
    prevVar1 = prevEquation[0];
    prevConst1 = prevEquation[1];
    prevVar2 = prevEquation[2];
    prevConst2 = prevEquation[3];
  }

  const table = document.getElementById("equationTable");
  const newRow = table.insertRow();

  if (constant1 == 0 && prevConst1 == 0) {
    const leftConstant = newRow.insertCell();
    createEquationElement(leftConstant, "left", typeEquation);
    leftConstant.textContent = createEquationString(
      variable1,
      constant1,
      "constant",
      typeEquation,
      typeOperation
    );
    const leftOperation = newRow.insertCell();
    createEquationElement(leftOperation, "left", typeEquation);
    leftOperation.textContent = createEquationString(
      variable1,
      constant1,
      "operation",
      typeEquation,
      typeOperation
    );
    const leftVariable = newRow.insertCell();
    createEquationElement(leftVariable, "left", typeEquation);
    leftVariable.textContent = createEquationString(
      variable1,
      constant1,
      "variable",
      typeEquation,
      typeOperation
    );
  } else {
    const leftVariable = newRow.insertCell();
    createEquationElement(leftVariable, "left", typeEquation);
    leftVariable.textContent = createEquationString(
      variable1,
      constant1,
      "variable",
      typeEquation,
      typeOperation
    );
    const leftOperation = newRow.insertCell();
    createEquationElement(leftOperation, "left", typeEquation);
    leftOperation.textContent = createEquationString(
      variable1,
      constant1,
      "operation",
      typeEquation,
      typeOperation
    );
    const leftConstant = newRow.insertCell();
    createEquationElement(leftConstant, "left", typeEquation);
    leftConstant.textContent = createEquationString(
      variable1,
      constant1,
      "constant",
      typeEquation,
      typeOperation
    );
  }

  const equalsElement = newRow.insertCell();
  createEquationElement(equalsElement, "equals", typeEquation);
  equalsElement.textContent = `=`;

  if (variable2 == 0 && (typeEquation == "regular" || prevVar2 == 0)) {
    const rightConstant = newRow.insertCell();
    createEquationElement(rightConstant, "right", typeEquation);
    rightConstant.textContent = createEquationString(
      variable2,
      constant2,
      "constant",
      typeEquation,
      typeOperation
    );
    const rightOperation = newRow.insertCell();
    createEquationElement(rightOperation, "right", typeEquation);
    rightOperation.textContent = createEquationString(
      variable2,
      constant2,
      "operation",
      typeEquation,
      typeOperation
    );
    const rightVariable = newRow.insertCell();
    createEquationElement(rightVariable, "right", typeEquation);
    rightVariable.textContent = createEquationString(
      variable2,
      constant2,
      "variable",
      typeEquation,
      typeOperation
    );
  } else {
    const rightVariable = newRow.insertCell();
    createEquationElement(rightVariable, "right", typeEquation);
    rightVariable.textContent = createEquationString(
      variable2,
      constant2,
      "variable",
      typeEquation,
      typeOperation
    );
    const rightOperation = newRow.insertCell();
    createEquationElement(rightOperation, "right", typeEquation);
    rightOperation.textContent = createEquationString(
      variable2,
      constant2,
      "operation",
      typeEquation,
      typeOperation
    );
    const rightConstant = newRow.insertCell();
    createEquationElement(rightConstant, "right", typeEquation);
    rightConstant.textContent = createEquationString(
      variable2,
      constant2,
      "constant",
      typeEquation,
      typeOperation
    );
  }
}

export default createRegularEquation;
