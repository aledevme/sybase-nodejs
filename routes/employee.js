const express = require('express'); 
const router = express.Router();
const employee = require('../controllers/employee');

router.get('/login',employee.logIn)

module.exports = router
