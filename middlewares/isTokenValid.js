const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const isTokenValid = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).send("Unauthorized");
  } else {
    const token = req.headers.authorization.split("")[1];
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        throw new Error();
      } else {
        next();
      }
    });
  }
};

module.exports = isTokenValid;
