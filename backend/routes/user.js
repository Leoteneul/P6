const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');



router.post('/signup', userCtrl.signup); // Route signup
router.post('/login', userCtrl.login); // Route signup
router.get('/home', auth, userCtrl.home); // Route signup


module.exports = router;