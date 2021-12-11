const express = require('express');

const { userController } = require('../controllers');

const router = express.Router();

router.get('/', userController.getAll);

router.get('/:id', userController.getById);

router.get('/', userController.create);

module.exports = router;