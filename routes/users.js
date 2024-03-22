var express = require("express");
const {
  getUser,
  postUser,
  login,
  updateUserProfile,
} = require("../controller/userController");
const { authenticate } = require("../authentication/auth");
var router = express.Router();

router.get("/", getUser);
router.post("/", postUser);
router.put("/", authenticate, updateUserProfile);
router.post("/login", login);

module.exports = router;
