const { UnauthorizedError } = require("../error-types");

module.exports = (err, req, res, next) => {
  if (err instanceof UnauthorizedError) {
    return res.status(401).send("Unauthorized");
  }
  return next(err);
};
