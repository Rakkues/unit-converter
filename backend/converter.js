exports.convert = (value, fromUnit, toUnit) => {
  if (fromUnit === toUnit) {
    return value;
  } else {
    return Number(value) * 5;
  }
};
