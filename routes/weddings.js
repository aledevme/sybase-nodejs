const express = require('express'); 
const router = express.Router();
const wedding = require('../controllers/weddings');

//instance router
router
//get request
.put('/:id/edit',wedding.update)
.get('/',wedding.all)
.get('/:id', wedding.findOne)
//post request
.post('/',wedding.create)
.post('/search',wedding.search)
//patch request
.patch('/:idwedding/products/:idproduct',wedding.findProduct)
module.exports = router