var express = require('express');
const { getListedNFTs, postListedNFTs } = require('../controller/listedNFTController');
var router = express.Router();

/* GET users listing. */
router.get('/',  getListedNFTs);
router.post('/', postListedNFTs);

module.exports = router;