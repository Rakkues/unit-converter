const {
  lengthConversionFactors,
  weightConversionFactors,
} = require("./conversionFactors.js");

function convertLength(value, fromUnit, toUnit) {
  let convertedBase;

  if (fromUnit === toUnit) {
    return value;
  } else {
    convertedBase = value / lengthConversionFactors[fromUnit];
    return convertedBase * lengthConversionFactors[toUnit];
  }
}

function convertWeight(value, fromUnit, toUnit) {
  let convertedBase;

  if (fromUnit === toUnit) {
    return value;
  } else {
    convertedBase = value / weightConversionFactors[fromUnit];
    return convertedBase * weightConversionFactors[toUnit];
  }
}

function convertTemperature(value, fromUnit, toUnit) {
  let numValue = Number(value);

  switch (fromUnit) {
    case "celcius":
      if (toUnit === "kelvin") {
        return numValue + 273.15;
      } else if (toUnit === "fahrenheit") {
        return numValue * (9 / 5) + 32;
      } else {
        return numValue;
      }
    case "fahrenheit":
      if (toUnit === "celcius") {
        return (numValue - 32) * (5 / 9);
      } else if (toUnit === "fahrenheit") {
        return (numValue - 32) * (5 / 9) + 273.15;
      } else {
        return numValue;
      }
    case "kelvin":
      if (toUnit === "celcius") {
        return numValue - 273.15;
      } else if (toUnit === "fahrenheit") {
        return (numValue - 273.15) * (9 / 5) + 32;
      } else {
        return numValue;
      }
  }
}

module.exports = { convertLength, convertTemperature, convertWeight };
