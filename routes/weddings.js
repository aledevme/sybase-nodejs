const express = require('express'); 
const router = express.Router();
const controller = require('../controllers/weddings');

router.get('/',controller.allWeedings)
router.post('/',controller.createWeeding)
router.get('/:id', controller.findWeeding)

module.exports = router