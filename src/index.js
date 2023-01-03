const express = require("express");
const bodyParser = require("body-parser");
const { fileImport } = require("./file-import");
const app = express();
const port = 5001; // using 5000 for site

app.use(express.json({ type: "*/*" }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Basic API for JS CSV variations");
});

app.get("/file-import", (req, res) => {
  res.send("Reached file-import endpoint");
});

app.post("/file-import", async (req, res) => {
  console.log("What is the request", req.body);
  var result = await fileImport(req);
  res.json({ msg: "Msg coming soon", result: result });
});
