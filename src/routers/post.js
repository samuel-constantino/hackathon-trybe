const express = require('express');

const { postController } = require('../controllers');
const { postsSchema } = require('../middlewares/validations');
const { auth } = require('../middlewares');

const router = express.Router();

router.get('/', postController.getAll);

router.get('/:id', postController.getById);

router.get('/:id/partnerPosts', postController.getByPartnerId);

router.post('/:id', postsSchema, auth, postController.create);

router.put('/:id', postsSchema, auth, postController.update);

router.delete('/:id', auth, postController.remove);

module.exports = router;