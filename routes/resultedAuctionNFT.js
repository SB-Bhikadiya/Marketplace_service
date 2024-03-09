var express = require('express');
const { getResultedAuctionNFTs, postResultedAuctionNFTs } = require('../controller/resultedAuctionNFTController');
var router = express.Router();

/* GET users listing. */
router.get('/',  getResultedAuctionNFTs);
router.post('/', postResultedAuctionNFTs);

module.exports = router;