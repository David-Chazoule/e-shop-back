const router = require('express').Router()
const connectController = require('../controllers/connect')


router.get('/', connectController.handleGetAll);
router.post('/', connectController.handlePost);
router.get('/:id', connectController.handleGetOne);
router.post('/login', connectController.handleAuthenticate)



module.exports = router