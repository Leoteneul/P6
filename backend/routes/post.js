const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')




router.post('/create', auth, multer, postCtrl.createPost); 
router.put('/modifyAll', auth, multer, postCtrl.modifyAllPost)
router.get('/show', auth, postCtrl.getAllPost);
router.delete('/deletePost', auth, postCtrl.deletePost) 
router.put('/modifyOne', auth, postCtrl.modifyOnePost)
router.post('/like', auth, postCtrl.getLiked)



module.exports = router;