const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')



router.post('/create', auth, multer, postCtrl.createPost); 



module.exports = router;