import express from "express";
import sum from "./sum.js";

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});

app.get("/home", async (req, res) => {
  res.json({
    msg: "This is home route",
  });
});

app.get("/getSum/:a/:b", async (req, res) => {
  const { a, b } = req.params;
  const summ = sum(parseInt(a), parseInt(b));

  res.json({
    ans: summ,
  });
});
