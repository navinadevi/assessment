const express = require('express');
const router = express.Router();
const controller = require('./policy.controller');

router.get('/', controller.getPolicy);
router.post('/', controller.savePolicy);
router.put('/:id', controller.updatePolicy);
router.delete('/:id', controller.deletePolicy);

module.exports = router;