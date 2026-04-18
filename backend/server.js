const express = require("express");
const cors = require("cors");
const converter = require("./converter.js");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/convert", (request, response) => {
  const data = request.body;
  const result = converter.convert(data.inputValue, data.fromUnit, data.toUnit);

  response.json({
    result: result,
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
