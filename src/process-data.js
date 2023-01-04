const processData = async (req) => {
  console.log("Reached file input");
  console.log(req.body);
  return "Reached me";
};

module.exports = {
  processData,
};
