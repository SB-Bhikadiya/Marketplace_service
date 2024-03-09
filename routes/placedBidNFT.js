var express = require('express');
const { getPlacedBidNFTs, postPlacedBidNFTs } = require('../controller/placedBidNFTController');
var router = express.Router();

/* GET users listing. */
router.get('/',  getPlacedBidNFTs);
router.post('/', postPlacedBidNFTs);

module.exports = router;