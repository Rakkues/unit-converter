function convert(value, fromUnit, toUnit) {
  switch (fromUnit) {
    case "centimeter":
      return convertCm(value, toUnit);
    case "meter":
      return convertMeter(value, toUnit);
    default:
      return value;
  }
}

function convertCm(inputValue, inputUnit) {
  switch (inputUnit) {
    case "kilometer":
      return inputValue / 1e5;
    case "meter":
      return inputValue / 1e2;
    case "centimeter":
      return inputValue;
    case "milimeter":
      return inputValue * 10;
    case "micrometer":
      return inputValue * 1e5;
    case "nanometer":
      return inputValue * 1e6;
    case "mile":
      return inputValue / 160900;
    case "yard":
      return inputValue / 91.44;
    case "foot":
      return inputValue / 30.48;
    case "inch":
      return inputValue / 2.54;
  }
}

function convertMeter(inputValue, inputUnit) {
  switch (inputUnit) {
    case "kilometer":
      return inputValue / 1e2;
    case "meter":
      return inputValue;
    case "centimeter":
      return inputValue * 1e2;
    case "milimeter":
      return inputValue * 1e3;
    case "micrometer":
      return inputValue * 1e6;
    case "nanometer":
      return inputValue * 1e9;
    case "mile":
      return inputValue / 160900;
    case "yard":
      return inputValue / 91.44;
    case "foot":
      return inputValue / 30.48;
    case "inch":
      return inputValue / 2.54;
  }
}

module.exports = {
  convert,
};
