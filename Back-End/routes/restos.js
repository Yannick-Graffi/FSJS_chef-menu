var express = require('express');
var router = express.Router();
const restoController = require('../controllers/restoController')
const Auth = require('../middlwares/auth')

router.get('/', Auth.isUser, restoController.getResto);
router.post('/', Auth.isUser, restoController.postResto);
router.put('/:id', Auth.isUser, restoController.updateResto);
router.delete('/:id', Auth.isUser, restoController.deleteResto);

module.exports = router;