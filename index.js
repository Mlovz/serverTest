const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
  res.json({
    msg: "Hello world My Friend!!!",
  });
});

app.listen(5000, () => {
  console.log("Server running!");
});
