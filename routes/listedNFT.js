var express = require('express');
const { getListedNFTs, postListedNFTs } = require('../controller/listedNFTController');
const { authenticate } = require('../authentication/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', authenticate, getListedNFTs);
router.post('/', authenticate, postListedNFTs);

module.exports = router;