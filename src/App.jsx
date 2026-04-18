import "./App.css";
import { useState } from "react";

const lengthUnits = ["centimenter", "inch", "meter"];

function App() {
  return (
    <>
      <h1>Unit Converter</h1>
      <UnitCoverter unitType="length" />
    </>
  );
}

function UnitCoverter({ unitType }) {
  const [inputValue, setInputValue] = useState(0);
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [result, setResult] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      inputValue: inputValue,
      fromUnit: fromUnit,
      toUnit: toUnit,
    };

    try {
      console.log(JSON.stringify(data));
      const response = await fetch("http://localhost:3000/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      console.log(`Conversion result: ${json.result}`);
    } catch (error) {
      console.error("Conversion failed: ", error);
    }
  };

  return (
    <form
      id={`${unitType}ConvertForm`}
      className="convertForm"
      onSubmit={handleSubmit}
    >
      <label for={`from${unitType}`}>Enter the length to convert</label>
      <input
        type="number"
        id="fromLength"
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
        {lengthUnits.map((length) => {
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
        {lengthUnits.map((length) => {
          return <option value={length}>{length}</option>;
        })}
      </select>
      <input type="submit" value="Convert" className="submitBtn" />
    </form>
  );
}

export default App;
