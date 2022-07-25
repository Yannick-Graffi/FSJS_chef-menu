var express = require('express');
var router = express.Router();
const menuController = require('../controllers/menuController')
const Auth = require('../middlwares/auth')

router.get('/', Auth.isUser, menuController.getMenu)
router.post('/', Auth.isUser, menuController.postMenu)

module.exports = router;
