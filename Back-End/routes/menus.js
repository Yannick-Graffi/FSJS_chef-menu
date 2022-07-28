var express = require('express');
var router = express.Router();
const menuController = require('../controllers/menuController')
const Auth = require('../middlwares/auth')

router.get('/:id', Auth.isUser, menuController.getMenu)
router.post('/:id', Auth.isUser, menuController.postMenu)

module.exports = router;
