import initialize from "../initialize.js";
import equationLevel from "./levels.js";

if (document.cookie == null || document.cookie == "")
  document.cookie = "level=1";
let previousLevel = document.cookie.split(";")[0].split("level=")[1];
document.getElementById("level").value = parseInt(previousLevel);
function createRandomEquation() {
  let levelInput = document.getElementById("level");
  levelInput.addEventListener("click", newEquation);
  let levelValue = levelInput.value;
  const equation = equationLevel(levelValue);
  return equation;
}

export default createRandomEquation;

function newEquation() {
  let level = document.getElementById("level").value;
  if (level != previousLevel) {
    const table = document.getElementById("equationTable");
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
    document.cookie = `level=${parseInt(level)}`;
    initialize();
    previousLevel = level;
  }
}
