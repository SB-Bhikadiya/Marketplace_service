var express = require('express');
const { getCanceledOfferedNFTs, postCanceledOfferedNFTs } = require('../controller/canceledOfferedNFTController');
const { authenticate } = require('../authentication/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', authenticate, getCanceledOfferedNFTs);
router.post('/', authenticate, postCanceledOfferedNFTs);

module.exports = router;