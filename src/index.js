const express = require("express");
const cors = require("cors");
const { processData } = require("./process-data");
const app = express();
const port = 5001; // using 5000 for site

app.use(cors());
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

app.post("/file-import", async (req, res, next) => {
  const response = await processData(req);

  res.set("Content-Type", "application/json");
  res.send(response);
});
