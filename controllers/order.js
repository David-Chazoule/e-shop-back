const { getAllOrderByUser, createOrder } = require("../models/order");

const HandleGetOrderByUser = async (req, res) => {
  try {
    const result = await getAllOrderByUser(req.params.id);

    res.status(200).json(result);
  } catch {
    res.status(500).send("internal server error");
  }
};

const HandelCreateOrder = async (req, res) => {
  try {

    const result = await createOrder(req.params.id, req.body);
    res.status(201).json(result[0]);
  } catch {
    res.status(500).send("internal server error");
  }
};

module.exports = {
  HandleGetOrderByUser,
  HandelCreateOrder,
};
