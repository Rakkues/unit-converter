import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const lengthUnits = [
  "kilometer",
  "meter",
  "centimeter",
  "millimeter",
  "micrometer",
  "nanometer",
  "mile",
  "yard",
  "foot",
  "inch",
];
const weightUnits = [
  "tonne",
  "kilogram",
  "gram",
  "milligram",
  "microgram",
  "imperial ton",
  "us ton",
  "pound",
  "ounce",
];
const temperatureUnits = ["celcius", "fahrenheit", "kelvin"];

function App() {
  return (
    <BrowserRouter>
      <h1>Unit Converter</h1>
      <nav>
        <Link to="/">Length</Link> | <Link to="/weight">Weight</Link> |{" "}
        <Link to="/temperature">Temperature</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<UnitConverter unitType={"length"} units={lengthUnits} />}
        />
        <Route
          path="/weight"
          element={<UnitConverter unitType={"weight"} units={weightUnits} />}
        />
        <Route
          path="/temperature"
          element={
            <UnitConverter unitType={"temperature"} units={temperatureUnits} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function UnitConverter({ unitType, units }) {
  const [inputValue, setInputValue] = useState(0);
  const [fromUnit, setFromUnit] = useState(units[0]);
  const [result, setResult] = useState(0);
  const [toUnit, setToUnit] = useState(units[0]);
  const [visibility, setVisibility] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      inputValue: inputValue,
      fromUnit: fromUnit,
      toUnit: toUnit,
      unitType: unitType,
    };

    try {
      console.log(JSON.stringify(data));
      const response = await fetch("http://localhost:3000/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      setVisibility(!visibility);
      setResult(json.result);
      console.log(`Conversion result: ${json.result}`);
    } catch (error) {
      console.error("Conversion failed: ", error);
    }
  };

  const handleReset = () => {
    setInputValue(0);
    setFromUnit(units[0]);
    setToUnit(units[0]);
    setVisibility(true);
  };

  return (
    <>
      {visibility && (
        <form
          id={`${unitType}ConvertForm`}
          className="convertForm"
          onSubmit={handleSubmit}
        >
          <label for={`from${unitType}`}>
            Enter the {`${unitType}`} to convert
          </label>
          <input
            type="number"
            id={`from${unitType}`}
            required
            onChange={(e) => setInputValue(e.target.value)}
          />
          <label for="fromUnit">Unit to convert from</label>
          <select
            name="fromUnit"
            id="fromUnit"
            required
            onChange={(e) => setFromUnit(e.target.value)}
          >
            {units.map((length) => {
              return <option value={length}>{length}</option>;
            })}
          </select>
          <label for="toUnit">Unit to convert to</label>
          <select
            name="toUnit"
            id="toUnit"
            required
            onChange={(e) => setToUnit(e.target.value)}
          >
            {units.map((length) => {
              return <option value={length}>{length}</option>;
            })}
          </select>
          <input type="submit" value="Convert" className="submitBtn" />
        </form>
      )}
      <ConversionResult
        fromValue={inputValue}
        fromUnit={fromUnit}
        toValue={result}
        toUnit={toUnit}
        visibility={visibility}
        units={units}
        handleReset={handleReset}
      />
    </>
  );
}

function ConversionResult({
  visibility,
  fromValue,
  fromUnit,
  toValue,
  toUnit,
  handleReset,
}) {
  return (
    !visibility && (
      <div className="conversionResult">
        <h1>Result of your calculation</h1>
        <p>{`${fromValue} ${fromUnit} = ${toValue} ${toUnit}`}</p>
        <button
          onClick={() => {
            handleReset();
          }}
        >
          Reset
        </button>
      </div>
    )
  );
}

export default App;
