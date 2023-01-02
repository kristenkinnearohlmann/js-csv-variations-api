const fileImport = async (req) => {
  console.log("Reached file input");
  console.log(req.data);
  return "Reached me";
};

module.exports = {
  fileImport,
};
