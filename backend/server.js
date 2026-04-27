const express = require("express");
const cors = require("cors");
const converter = require("./converter.js");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/convert", (request, response) => {
  const data = request.body;
  console.log(data);
  let result;

  switch (data.unitType) {
    case "length":
      console.log("Converting length");
      result = converter.convertLength(
        data.inputValue,
        data.fromUnit,
        data.toUnit,
      );
      break;
    case "weight":
      console.log("Converting weight");
      result = converter.convertWeight(
        data.inputValue,
        data.fromUnit,
        data.toUnit,
      );
      break;
    case "temperature":
      console.log("Converting temperature");
      result = converter.convertTemperature(
        data.inputValue,
        data.fromUnit,
        data.toUnit,
      );
      break;
  }

  response.json({
    result: result,
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
