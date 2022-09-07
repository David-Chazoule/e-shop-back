const user = require("./user");
const product = require("./product");
const order = require("./order");

module.exports = (app) => {
  app.use("/user", user);
  app.use("/product", product);
  app.use("/order", order);
};

