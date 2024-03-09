var express = require('express');
const { getNFTCollection, postNFTCollection } = require('../controller/nftCollectionController');
var router = express.Router();

/* GET users listing. */
router.get('/',  getNFTCollection);
router.post('/', postNFTCollection);

module.exports = router;