var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')
const Auth = require('../middlwares/auth')

router.get('/', Auth.isUser, productController.getProducts);
router.post('/', Auth.isUser, productController.postProduct);
router.put('/:id', Auth.isUser, productController.updateProduct);
router.delete('/:id', Auth.isUser, productController.deleteProduct);

module.exports = router;