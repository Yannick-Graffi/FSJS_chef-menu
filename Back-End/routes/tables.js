var express = require('express');
var router = express.Router();
const tableController = require('../controllers/tableController')
const Auth = require('../middlwares/auth')

router.get('/', Auth.isUser, tableController.getTables);
router.post('/', Auth.isUser, tableController.postTable);
router.put('/:id', Auth.isUser, tableController.updateTable);
router.delete('/:id', Auth.isUser, tableController.deleteTable);

module.exports = router;