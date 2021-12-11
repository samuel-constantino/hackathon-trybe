const express = require('express');

const { postController } = require('../controllers');

const router = express.Router();

router.get('/', postController.getAll);

router.get('/:id', postController.getById);

router.get('/:id/partnerPosts', postController.getByPartnerId);

router.post('/:id', postController.create);

module.exports = router;