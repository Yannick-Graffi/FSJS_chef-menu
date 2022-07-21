var express = require('express');
var router = express.Router();
const tableController = require('../controllers/tableController')

router.get('/', tableController.getTables);
router.post('/', tableController.postTable);
router.put('/:id', tableController.updateTable);
router.delete('/:id', tableController.deleteTable);

module.exports = router;