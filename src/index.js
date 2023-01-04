const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "./uploads" });
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

app.post("/file-import", async (req, res, next) => {
  console.log(req.body);
});

// app.post("/file-import", upload.single("file"), async (req, res, next) => {
//   console.log(req.file);
//   // const form = formidable({ multiples: true });
//   // form.parse(req, (err, fields, files) => {
//   //   if (err) {
//   //     console.error(String(err));
//   //   }
//   //   res.end(JSON.stringify({ fields, files }, null, 2));
//   // });

//   // return;
//   // var result = await fileImport(req);
//   // res.json({ msg: "Msg coming soon", result: result });
// });
