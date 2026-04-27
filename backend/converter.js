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
  switch (fromUnit) {
    case "celcius":
      if (toUnit === "kelvin") {
        return value + 273.15;
      } else if (toUnit === "fahrenheit") {
        return value * (9 / 5) + 32;
      } else {
        return value;
      }
    case "fahrenheit":
      if (toUnit === "celcius") {
        return (value - 32) * (5 / 9);
      } else if (toUnit === "fahrenheit") {
        return (value - 32) * (5 / 9) + 273.15;
      } else {
        return value;
      }
    case "kelvin":
      if (toUnit === "celcius") {
        return value - 273.15;
      } else if (toUnit === "fahrenheit") {
        return (value - 273.15) * (9 / 5) + 32;
      } else {
        return value;
      }
  }
}

module.exports = { convertLength, convertTemperature, convertWeight };
