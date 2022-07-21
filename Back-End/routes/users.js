var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const Auth = require("../middlwares/auth")


router.get('/', Auth.isUser, userController.getUser);
router.post('/', userController.postUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
