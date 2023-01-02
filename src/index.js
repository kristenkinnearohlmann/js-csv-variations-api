const express = require("express");
const { fileImport } = require("./file-import");
const app = express();
const port = 5001; // using 5000 for site

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/file-import", (req, res) => {
  res.send("Reached file-import endpoint");
});

app.post("/file-import", async (req, res) => {
  var result = await fileImport(req);
  res.json({ msg: "Msg coming soon", result: result });
});
