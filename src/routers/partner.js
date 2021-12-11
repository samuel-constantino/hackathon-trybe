const express = require('express');

const partnerController = require('../controllers/partner');

const router = express.Router();

router.get('/', partnerController.getAll);

router.get('/:id', partnerController.getById);

router.post('/', partnerController.create);

module.exports = router;