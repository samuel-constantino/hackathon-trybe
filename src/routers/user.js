const express = require('express');

const { userController } = require('../controllers');
const { userSchema } = require('../middlewares/validations');

const router = express.Router();

router.get('/', userController.getAll);

router.get('/:id', userController.getById);

router.post('/', userSchema, userController.create);

router.put('/:id', userSchema, userController.update);

router.delete('/:id', userController.remove);

module.exports = router;