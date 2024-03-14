var express = require('express');
const { getNFTs } = require('../controller/nftController');
const { authenticate } = require('../authentication/auth');
var router = express.Router();

router.get('/', authenticate,getNFTs);

module.exports = router;