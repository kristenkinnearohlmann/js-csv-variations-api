const processData = async (req) => {
  console.log("Reached file input");
  console.log(req.body);
  // TODO: Handle request, return useful response
  return { msg: "End of line" };
};

module.exports = {
  processData,
};
