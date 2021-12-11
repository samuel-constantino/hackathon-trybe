const express = require('express');

const { postController } = require('../controllers');

const { postsSchema } = require('../middlewares/validations');

const router = express.Router();

router.get('/', postController.getAll);

router.get('/:id', postController.getById);

router.get('/:id/partnerPosts', postController.getByPartnerId);

router.post('/:id', postsSchema, postController.create);

router.put('/:id', postsSchema, postController.update);

module.exports = router;