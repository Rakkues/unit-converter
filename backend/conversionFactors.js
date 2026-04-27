const lengthConversionFactors = {
  kilometer: 1e-3,
  meter: 1,
  centimeter: 1e2,
  millimeter: 1e3,
  micrometer: 1e6,
  nanometer: 1e9,
  mile: 0.00062,
  yard: 1.094,
  foot: 3.2808,
  inch: 39.37,
};

const weightConversionFactors = {
  tonne: 1e-6,
  kilogram: 1e-3,
  gram: 1,
  milligram: 1e3,
  microgram: 1e6,
  "imperial ton": 1.016e6 ** -1,
  "us ton": 907200 ** -1,
  pound: 453.6 ** -1,
  ounce: 28.35 ** -1,
};

module.exports = { lengthConversionFactors, weightConversionFactors };
