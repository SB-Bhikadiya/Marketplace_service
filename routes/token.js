var express = require('express');
const { getToken, postToken } = require('../controller/tokenController');
var router = express.Router();

/* GET users listing. */
router.get('/', getToken);
router.post('/', postToken);

module.exports = router;