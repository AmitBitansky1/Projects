function createRandomEquation() {
  const variable1 = Math.floor(Math.random() * 21) - 10;
  const constant1 = Math.floor(Math.random() * 21) - 10;
  const variable2 = Math.floor(Math.random() * 21) - 10;
  const constant2 = Math.floor(Math.random() * 21) - 10;

  return [variable1, constant1, variable2, constant2];
}

export default createRandomEquation;
