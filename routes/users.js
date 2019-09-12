const express = require('express');
const router = express.Router();
const { get_profile } = require('../controllers/get_profile');
const { home } = require('../controllers/home');

/* GET users listing. */
router.get('/', home);
router.get('/getprofile', get_profile);

module.exports = router;
