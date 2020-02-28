const express = require('express');
const router = express.Router();

const maj = require('./maj');
const gallery = require('./gallery');

router.use('/maj', maj);
router.use('/gallery', gallery);

module.exports = router;