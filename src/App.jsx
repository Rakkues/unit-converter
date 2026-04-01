import "./App.css";

const lengthUnits = ["centimenter", "inch", "meter"];

function App() {
  return (
    <>
      <h1>Unit Converter</h1>
      <UnitCoverter unitType="length" />
    </>
  );
}

function UnitCoverter(props) {
  return (
    <form id={`${props.unitType}ConvertForm`} className="convertForm">
      <label for={`from${props.unitType}`}>Enter the length to convert</label>
      <input type="text" id="fromLength" required />
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
