var express = require('express');
const { getUser, postUser, login } = require('../controller/userController');
var router = express.Router();

router.get('/', getUser);
router.post('/', postUser);
router.post('/login', login);

module.exports = router;
