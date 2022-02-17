const express = require("express"); // common js module
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there test" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
