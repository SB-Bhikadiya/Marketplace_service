var express = require('express');
const { getCanceledOfferedNFTs, postCanceledOfferedNFTs } = require('../controller/canceledOfferedNFTController');
var router = express.Router();

/* GET users listing. */
router.get('/',  getCanceledOfferedNFTs);
router.post('/', postCanceledOfferedNFTs);

module.exports = router;