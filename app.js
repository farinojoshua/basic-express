const express = require("express");
const app = express();

app.use(express.json());

let menu = ["Teh", "Kopi", "Jus"];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/menu", (req, res) => {
  res.status(200).json({ message: "Berhasil ambil data", data: menu });
});

app.post("/menu", (req, res) => {
  const { item } = req.body;
  if (!item) {
    return res.status(400).json({ message: "Item tidak boleh kosong" });
  }
  menu.push(item);
  res.status(201).json({ message: "Berhasil tambahin data", data: menu });
});

// Tambahkan put & delete seperti sebelumnya...

// ✅ Ini penting: hanya jalankan listen kalau file ini dijalankan langsung
if (require.main === module) {
  const port = 3000;
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

// ✅ Export hanya instance express-nya
module.exports = app;
