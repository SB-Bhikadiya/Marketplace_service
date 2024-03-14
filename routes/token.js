var express = require('express');
const { getToken, postToken } = require('../controller/tokenController');
const { authenticate } = require('../authentication/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', authenticate ,getToken);
router.post('/', authenticate, postToken);

module.exports = router;