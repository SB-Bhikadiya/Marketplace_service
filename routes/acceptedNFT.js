var express = require('express');
const { getAcceptedNFTs, postAcceptedNFTs } = require('../controller/acceptedNftController');
var router = express.Router();

/* GET users listing. */
router.get('/', getAcceptedNFTs);
router.post('/', postAcceptedNFTs);

module.exports = router;
