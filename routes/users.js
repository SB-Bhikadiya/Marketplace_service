var express = require('express');
const { getUser, postUser, login } = require('../controller/userController');
const { authenticate } = require('../authentication/auth');
var router = express.Router();

router.get('/', authenticate, getUser);
router.post('/' , postUser);
router.post('/login', login);

module.exports = router;
