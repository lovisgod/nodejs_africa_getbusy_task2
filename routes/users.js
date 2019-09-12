const express = require('express');
const router = express.Router();
const { get_profile } = require('../controllers/get_profile');

/* GET users listing. */
router.get('/', get_profile);

module.exports = router;
