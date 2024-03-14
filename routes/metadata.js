var express = require("express");
const {
  getTokenMetadata,
  postTokenMetadata,
} = require("../controller/metadataController");
const { authenticate } = require("../authentication/auth");
var router = express.Router();

router.get("/", authenticate,getTokenMetadata);

module.exports = router;
