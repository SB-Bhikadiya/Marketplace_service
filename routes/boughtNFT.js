var express = require('express');
const { getBoughtNFTs, postBoughtNFTs } = require('../controller/boughtNFTController');
var router = express.Router();

/* GET users listing. */
router.get('/', getBoughtNFTs );
router.post('/', postBoughtNFTs);

module.exports = router;