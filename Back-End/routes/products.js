var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

router.get('/', productController.getProducts);
router.post('/', productController.postProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;