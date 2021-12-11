const express = require('express');

const { userController } = require('../controllers');
const { userSchema } = require('../middlewares/validations');

const router = express.Router();

router.get('/', userController.getAll);

router.get('/:id', userController.getById);

router.post('/', userSchema, userController.create);

module.exports = router;