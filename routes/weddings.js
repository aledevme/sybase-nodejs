const express = require('express'); 
const router = express.Router();
const wedding = require('../controllers/weddings');

router.get('/',wedding.all)
router.post('/',wedding.create)
router.get('/:id', wedding.findOne)

module.exports = router