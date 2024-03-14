var express = require('express');
const { getCreatedAuctionNFTs, postCreatedAuctionNFTs } = require('../controller/createdAuctionNFTController');
const { authenticate } = require('../authentication/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', authenticate,  getCreatedAuctionNFTs);
router.post('/',authenticate ,postCreatedAuctionNFTs);

module.exports = router;