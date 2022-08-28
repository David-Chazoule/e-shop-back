const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const userController = require("../controllers/user");
const isTokenValid = require("../middlewares/isTokenValid");

router.get("/", isTokenValid, asyncHandler(userController.handleGetAll));
router.post("/", asyncHandler(userController.handlePost));
router.get("/:id", isTokenValid, asyncHandler(userController.handleGetOne));
router.post("/login", asyncHandler(userController.handleAuthenticate));
router.post("/me", isTokenValid, asyncHandler(userController.handleUserInfo));
router.patch("/:id", asyncHandler(userController.handleUpdateUserInfo));
module.exports = router;
