const express = require("express");
const cors = require("cors");
const converter = require("./converter.js");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/convert", (request, response) => {
  response.json({
    value: request.body.value,
    type: request.body.type,
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
