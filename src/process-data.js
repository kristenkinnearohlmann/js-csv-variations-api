const processData = async (req) => {
  console.log("Reached file input");
  console.log(req.body);
  // TODO: Handle request, return useful response
  // TODO: Stringify back and forth
  // TODO: Add helper functions
  // TODO: Add tests
  return { status: 200, body: { msg: "End of line" } };
};

module.exports = {
  processData,
};
