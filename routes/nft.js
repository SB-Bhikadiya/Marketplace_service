var express = require('express');
const { getNFTs } = require('../controller/nftController');
var router = express.Router();

router.get('/', getNFTs);

module.exports = router;