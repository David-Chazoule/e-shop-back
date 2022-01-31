const router = require("express").Router();
const asyncHander = require("express-async-handler");
const userController = require("../controllers/user");
const isTokenValid = require("../middlewares/isTokenValid");

router.get("/", isTokenValid, asyncHander(userController.handleGetAll));
router.post("/", asyncHander(userController.handlePost));
router.get("/:id", isTokenValid, asyncHander(userController.handleGetOne));
router.post("/login", asyncHander(userController.handleAuthenticate));
router.post("/me", isTokenValid, asyncHander(userController.handleUserInfo));

module.exports = router;
