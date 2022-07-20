var express = require('express');
var router = express.Router();
const orderController = require('../controllers/orderController.js')

router.get('/', orderController.getOrder);
router.post('/', orderController.postOrder);
router.put('/:id', orderController.updateOrder);
router.delete(':id', orderController.deleteOrder);

module.exports = router;