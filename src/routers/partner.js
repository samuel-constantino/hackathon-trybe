const express = require('express');

const partnerController = require('../controllers/partner');
const { partnerSchema } = require('../middlewares/validations');
const { auth } = require('../middlewares');

const router = express.Router();

router.get('/', partnerController.getAll);

router.get('/:id', partnerController.getById);

router.post('/', partnerSchema, auth, partnerController.create);

router.put('/:id', partnerSchema, auth, partnerController.update);

router.delete('/:id', auth, partnerController.remove);

module.exports = router;