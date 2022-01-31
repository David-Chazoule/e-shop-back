module.exports = (err, req, res, next) => {
  console.error(err.name, err.message);
  res.status(500).send("Internal server error");
};
