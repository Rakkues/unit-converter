const { meterConversionFactors } = require("./lenConversionFactors");

function convert(value, fromUnit, toUnit) {
  let convertedMeter;
  if (fromUnit === toUnit) {
    return value;
  } else {
    convertedMeter = value / meterConversionFactors[fromUnit];
    return convertedMeter * meterConversionFactors[toUnit];
  }
}

module.exports = { convert };
