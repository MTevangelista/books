const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController')

router.get('/', controller.getAll)
router.get('/theme', controller.getAllByFilter)
router.get('/:slug', controller.getBySlug)
router.post('/', controller.create)

module.exports = router