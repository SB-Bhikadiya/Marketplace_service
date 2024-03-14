var express = require('express');
const { getUser, postUser, login } = require('../controller/userController');
const { authenticate } = require('../authentication/auth');
var router = express.Router();

router.get('/', authenticate, getUser);
router.post('/',authenticate , postUser);
router.post('/login',authenticate ,login);

module.exports = router;
