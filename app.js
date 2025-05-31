const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // supaya bisa terima JSON dari body request

let menu = ["Teh", "Kopi", "Jus"];

// GET / => cek server jalan
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// GET /menu => ambil semua menu
app.get("/menu", (req, res) => {
  res.status(200).json({ message: "Berhasil ambil data", data: menu });
});

// POST /menu => tambah menu baru
app.post("/menu", (req, res) => {
  const { item } = req.body;
  if (!item) {
    return res.status(400).json({ message: "Item tidak boleh kosong" });
  }
  menu.push(item);
  res.status(201).json({ message: "Berhasil tambah data", data: menu });
});

// PUT /menu/:index => update item menu berdasarkan index
app.put("/menu/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const { item } = req.body;

  if (!item || isNaN(index) || index < 0 || index >= menu.length) {
    return res.status(400).json({ message: "Permintaan tidak valid" });
  }

  menu[index] = item;
  res.status(200).json({ message: "Berhasil ubah data", data: menu });
});

// DELETE /menu/:index => hapus item berdasarkan index
app.delete("/menu/:index", (req, res) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= menu.length) {
    return res.status(400).json({ message: "Index tidak valid" });
  }

  const deleted = menu.splice(index, 1);
  res
    .status(200)
    .json({ message: `Berhasil hapus '${deleted[0]}'`, data: menu });
});

// Jalankan server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
