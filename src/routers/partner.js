const express = require('express');

const partnerController = require('../controllers/partner');

const { partnerSchema } = require('../middlewares/validations');

const router = express.Router();

router.get('/', partnerController.getAll);

router.get('/:id', partnerController.getById);

router.post('/', partnerSchema, partnerController.create);

module.exports = router;