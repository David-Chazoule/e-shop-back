const router = require("express").Router();
const orderController = require("../controllers/order");

router.get("/:id", orderController.HandleGetOrderByUser);
router.post("/:id", orderController.HandelCreateOrder);

module.exports = router;