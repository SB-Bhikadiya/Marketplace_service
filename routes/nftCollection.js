var express = require('express');
const { getNFTCollection, postNFTCollection } = require('../controller/nftCollectionController');
const { authenticate } = require('../authentication/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', authenticate, getNFTCollection);
router.post('/', authenticate,postNFTCollection);

module.exports = router;