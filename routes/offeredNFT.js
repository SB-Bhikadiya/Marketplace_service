var express = require('express');
const { getOfferedNFTs, postOfferedNFTs } = require('../controller/offeredNFTController');
const { authenticate } = require('../authentication/auth');
var router = express.Router();

/* GET users listing. */
router.get('/',  authenticate,getOfferedNFTs);
router.post('/', authenticate,postOfferedNFTs);

module.exports = router;