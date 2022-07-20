var express = require('express');
var router = express.Router();
const tableController = require('../controllers/tableController')

router.get('/', tableController.getTables);
router.post('/', tableController.postTable);
router.put('/:numero', tableController.updateTable);
router.delete('/:numero', tableController.deleteTable);

module.exports = router;