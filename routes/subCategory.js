
const express = require('express');
const router = express.Router();

const subCategory = require('./handler/sub-category');

router.get('/', subCategory.getAll);
router.get('/:id', subCategory.get);
router.post('/', subCategory.create);
router.put('/:id', subCategory.update);
router.delete('/:id', subCategory.destroy);

module.exports = router;
