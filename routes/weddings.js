const express = require('express'); 
const router = express.Router();
const wedding = require('../controllers/weddings');

//instance router
router
//get request
.get('/',wedding.all)
.get('/:id', wedding.findOne)
//post request
.post('/',wedding.create)
.post('/search',wedding.search)
//put request
.put('/:id',wedding.update)
//patch request
.patch('/:idwedding/products/:idproduct',wedding.findProduct)
module.exports = router