var express = require('express');
const { getOfferedNFTs, postOfferedNFTs } = require('../controller/offeredNFTController');
var router = express.Router();

/* GET users listing. */
router.get('/',  getOfferedNFTs);
router.post('/', postOfferedNFTs);

module.exports = router;