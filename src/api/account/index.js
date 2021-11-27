const express = require('express');
const router = express.Router();
const controller = require('./account.controller');

router.get('/', controller.getAccount);
router.post('/', controller.saveAccount);
router.put('/:id', controller.updateAccount);
router.delete('/:id', controller.deleteAccount);

module.exports = router;