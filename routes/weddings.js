const express = require('express'); 
const router = express.Router();
const wedding = require('../controllers/weddings');

//instance router
router
//get request
.get('/',wedding.all)
.get('/search',wedding.search)
.get('/:id', wedding.findOne)
.patch('/:idwedding/products/:idproduct',wedding.findProduct)
//post request
.post('/',wedding.create)

module.exports = router