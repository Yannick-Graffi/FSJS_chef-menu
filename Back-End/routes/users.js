var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const Auth = require("../middlwares/auth")


router.get('/', Auth.isUser, userController.getUser);
router.post('/', userController.postUser);
router.put('/:id', Auth.isUser, userController.updateUser);
router.delete('/:id', Auth.isUser, userController.deleteUser);

module.exports = router;
