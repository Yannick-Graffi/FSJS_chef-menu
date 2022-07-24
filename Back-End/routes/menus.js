var express = require('express');
var router = express.Router();
const menuController = require('../controllers/menuController')

router.get('/', menuController.getMenu)
router.post('/', menuController.postMenu)

module.exports = router;
