const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const menu = ["Teh", "Kopi", "Jus"];

app.get("/menu", (req, res) => {
  res.json({ message: "Berhasil ambil data", data: menu }).status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
