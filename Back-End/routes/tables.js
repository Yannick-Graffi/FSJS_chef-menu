var express = require('express');
var router = express.Router();
const tableController = require('../controllers/tableController')
const Auth = require('../middlwares/auth')

router.get('/', tableController.getTables);
router.post('/', Auth.isUser, tableController.postTable);
router.put('/:id', tableController.updateTable);
router.delete('/:id', tableController.deleteTable);

module.exports = router;