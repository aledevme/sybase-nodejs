const express = require('express'); 
const router = express.Router();
const wedding = require('../controllers/weddings');
//instance router
router
//get request
.get('/',wedding.all)
.get('/:id', wedding.findOne)
//post request
.post('/create',wedding.create)
.post('/products/add',wedding.addProduct)
//put request
.put('/:id/edit',wedding.update)
.put('/:id/products/:productId/edit',wedding.updateProductCount)
.put('/:id/indications/:indicationId/status',wedding.updateStatusIndication)
//patch request
.patch('/:id/products/',wedding.products)
.patch('/:id/products/:productId',wedding.getOneProduct)
.patch('/:id/indications/', wedding.getListIndications)
//delete request
.delete('/products/delete',wedding.deleteProduct)
.delete('/:id/indications/:idIndication',wedding.deleteIndication)
module.exports = router