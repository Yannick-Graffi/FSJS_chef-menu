var express = require('express');
var router = express.Router();
const forgotController = require('../controllers/forgotController')
const Auth = require('../middlwares/auth')

router.post('/', forgotController.postMail)

module.exports = router;
