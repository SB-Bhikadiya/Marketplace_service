var express = require("express");
const {
  getTokenMetadata,
  postTokenMetadata,
} = require("../controller/metadataController");
var router = express.Router();

router.get("/", getTokenMetadata);

module.exports = router;
