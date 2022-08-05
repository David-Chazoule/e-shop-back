const user = require("./user");
const product = require("./product");
const information = require("./information");

module.exports = (app) => {
  app.use("/user", user);
  app.use("/product", product);
  app.use("/information", information);
};
