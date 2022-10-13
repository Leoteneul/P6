const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')



router.post('/signup', userCtrl.signup); // Route signup
router.post('/login', userCtrl.login); 
router.get('/home', auth, userCtrl.home); 
router.put('/profil', auth, multer, userCtrl.modifyProfil)
router.put('/email', auth, userCtrl.modifyEmail )


module.exports = router;