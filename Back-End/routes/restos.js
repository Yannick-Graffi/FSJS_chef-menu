var express = require('express');
var router = express.Router();
const restoController = require('../controllers/restoController')

router.get('/', restoController.getResto);
router.post('/', restoController.postResto);
router.put('/:id', restoController.updateResto);
router.delete('/:id', restoController.deleteResto);

module.exports = router;