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
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      value: 50,
      type: "length",
    };

    try {
      console.log(JSON.stringify(data));
      const response = await fetch("http://localhost:3000/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      console.log(`Input value: ${json.value}`);
      console.log(`Type value: ${json.type}`);
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
      <select name="fromUnit" id="fromUnit" required>
        {lengthUnits.map((length) => {
          return <option value={length}>{length}</option>;
        })}
      </select>
      <label for="toUnit">Unit to convert to</label>
      <select name="toUnit" id="toUnit" required>
        {lengthUnits.map((length) => {
          return <option value={length}>{length}</option>;
        })}
      </select>
      <input type="submit" value="Convert" className="submitBtn" />
    </form>
  );
}

export default App;
