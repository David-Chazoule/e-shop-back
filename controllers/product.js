const { getAllProduct, getProductById } = require("../models/product");

const HandleGetAllProduct = async (req, res) => {
  try {
    const result = await getAllProduct();
    res.status(200).json(result);
  } catch {
    res.status(500).send("Internal server error");
  }
};

const HandleGetProductById = async (req, res) => {
  try {
    const result = await getProductById(req.params.id);
    res.status(200).json(result[0]);
  } catch {
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  HandleGetAllProduct,
  HandleGetProductById,
};
