const user = require("./user");
const product = require("./product");


module.exports = (app) => {
  app.use("/user", user);
  app.use("/product", product);
  
};
