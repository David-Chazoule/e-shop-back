const { UserAlreadyExistError } = require("../error-types");

module.exports = (err, req, res, next) => {
  if (err instanceof UserAlreadyExistError) {
    res.status(401).send("User already exist");
  }
  return next(err);
};
