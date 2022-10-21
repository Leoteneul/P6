const express = require('express');
const router = express.Router();
const coworkerCtrl = require('../controllers/coworker');
const auth = require('../middleware/auth');

router.get('/getAllCoworker', auth, coworkerCtrl.getAllCoworker);
router.get('/getOneCoworker/:id', auth, coworkerCtrl.getOneCoworker);


module.exports = router;