var express = require('express');
const { getCreatedAuctionNFTs, postCreatedAuctionNFTs } = require('../controller/createdAuctionNFTController');
var router = express.Router();

/* GET users listing. */
router.get('/',  getCreatedAuctionNFTs);
router.post('/', postCreatedAuctionNFTs);

module.exports = router;