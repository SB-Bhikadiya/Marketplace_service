var express = require('express');
const { getResultedAuctionNFTs, postResultedAuctionNFTs } = require('../controller/resultedAuctionNFTController');
const { authenticate } = require('../authentication/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', authenticate, getResultedAuctionNFTs);
router.post('/', authenticate, postResultedAuctionNFTs);

module.exports = router;