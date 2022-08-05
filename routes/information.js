const router = require("express").Router();
const InformationController = require("../controllers/information");

router.get("/", InformationController.HandleGetAllInformation);
router.post("/", InformationController.handlePost);
router.get("/:id" , InformationController.HandleGetInformationById);



module.exports = router;