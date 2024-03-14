var express = require('express');
const { getPlacedBidNFTs, postPlacedBidNFTs } = require('../controller/placedBidNFTController');
const { authenticate } = require('../authentication/auth');
var router = express.Router();

/* GET users listing. */
router.get('/',  authenticate,getPlacedBidNFTs);
router.post('/', authenticate, postPlacedBidNFTs);

module.exports = router;