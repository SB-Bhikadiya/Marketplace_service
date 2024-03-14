var express = require('express');
const { getBoughtNFTs, postBoughtNFTs } = require('../controller/boughtNFTController');
const { authenticate } = require('../authentication/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', authenticate, getBoughtNFTs );
router.post('/', authenticate, postBoughtNFTs);

module.exports = router;