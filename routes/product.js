const router = require('express').Router()
const productController = require('../controllers/product')

router.get('/', productController.HandleGetAllProduct);
router.get('/:id', productController.HandleGetProductById);



module.exports = router