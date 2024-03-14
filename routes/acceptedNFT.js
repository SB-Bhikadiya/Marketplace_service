var express = require('express');
const { getAcceptedNFTs, postAcceptedNFTs } = require('../controller/acceptedNftController');
const { authenticate } = require('../authentication/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', authenticate, getAcceptedNFTs);
router.post('/',authenticate, postAcceptedNFTs);

module.exports = router;
