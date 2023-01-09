const processData = async (req) => {
  console.log("Reached file input");
  console.log(req.body);
  return { msg: "End of line" };
};

module.exports = {
  processData,
};
