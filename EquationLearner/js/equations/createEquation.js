import updateEquation from "./updateEquation.js";

function createEquation(
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

  const equation = [
    variable1,
    constant1,
    variable2,
    constant2,
    typeEquation,
    typeOperation,
  ];

  const table = document.getElementById("equationTable");
  const newRow = table.insertRow();

  //Left-Side of Equation
  if (constant1 == 0 && prevConst1 == 0) {
    createEquationHalf(newRow, "left", "constant", equation);
  } else {
    createEquationHalf(newRow, "left", "variable", equation);
  }

  const equalsElement = newRow.insertCell();
  createEquationElement(equalsElement, "equals", typeEquation);
  equalsElement.textContent = `=`;

  //Right-Side of Equation
  if (variable2 == 0 && (typeEquation == "regular" || prevVar2 == 0)) {
    createEquationHalf(newRow, "right", "constant", equation);
  } else {
    createEquationHalf(newRow, "right", "variable", equation);
  }
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
    return createVariableString(variable, typeEquation, typeOperation);
  }
  if (type == "constant") {
    return createConstantString(
      variable,
      constant,
      prevVar1,
      prevVar2,
      typeEquation,
      typeOperation
    );
  }
  if (type == "operation") {
    return createOperationString(variable, constant, typeOperation);
  }
}

function createVariableString(variable, typeEquation, typeOperation) {
  let hideVariable =
    variable == 0 || typeOperation == "divide" || typeOperation == "multiply";
  if (hideVariable) return "";
  if (variable == 1 && typeEquation == "adjuster") return ` +x`;
  if (variable == 1) return ` x`;
  if (variable == -1) return `-x`;
  if (typeEquation == "adjuster" && variable > 0) return `+${variable}x`;
  if (variable > 1) return ` ${variable}x`;
  return `${variable}x`;
}

function createConstantString(
  variable,
  constant,
  prevVar1,
  prevVar2,
  typeEquation,
  typeOperation
) {
  let hideConstant =
    (constant == 0 && variable != 0) ||
    typeOperation == "divide" ||
    typeOperation == "multiply";
  if (hideConstant) return "";
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

function createOperationString(variable, constant, typeOperation) {
  let hideOperation = constant == 0 || variable == 0;
  if (hideOperation) return "";
  if (constant > 0 && typeOperation == "divide") return ` /${constant}`;
  if (variable > 0 && typeOperation == "divide") return ` /${variable}`;
  if (constant > 0 && typeOperation == "multiply") return ` *${constant}`;
  if (variable > 0 && typeOperation == "multiply") return ` *${variable}`;
  if (constant > 0) return ` + `;
  return ` - `;
}

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

function createEquationSection(row, side, elementType, equation) {
  const column = row.insertCell();
  const typeEquation = equation[4];
  const typeOperation = equation[5];
  const variable = side == "left" ? equation[0] : equation[2];
  const constant = side == "left" ? equation[1] : equation[3];

  createEquationElement(column, side, typeEquation);
  column.textContent = createEquationString(
    variable,
    constant,
    elementType,
    typeEquation,
    typeOperation
  );
}

function createEquationHalf(newRow, side, firstElement, equation) {
  createEquationSection(newRow, side, firstElement, equation);
  createEquationSection(newRow, side, "operation", equation);
  if (firstElement == "constant")
    createEquationSection(newRow, side, "variable", equation);
  if (firstElement == "variable")
    createEquationSection(newRow, side, "constant", equation);
}

export default createEquation;
