const { RecordNotFoundError } = require("../error-types");

module.exports = (err, req, res, next) => {
  if (err instanceof RecordNotFoundError) {
    return res.status(404).send("Record not found");
  }
  return next(err);
};
