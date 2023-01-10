const processData = async (req) => {
  console.log("Reached file input");
  console.log(req.body);
  // TODO: Handle request, return useful response
  return { status:200, msg: "End of line" };
};

module.exports = {
  processData,
};
