const express = require('express')
const cors = require('cors');

//init mail
var nodemailer = require('nodemailer');

//init firebase server
var admin = require("firebase-admin");
var serviceAccount = './token.json'
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //your database url
});



//init app
const app = express()
const bodyparser = require('body-parser'); 
const port = process.env.PORT || 3000

//objects routes
const weddings = require('./routes/weddings')
const employee = require('./routes/employee')
const indications = require('./routes/indications')
const delivery = require('./routes/Deliveries')
const stores = require('./routes/Stores')
//middlewares
app.use(cors())
app.use(bodyparser.json()); 

//parser responses
app.use(bodyparser.urlencoded({     
    extended: true
}))

//route groups
app.use('/employee',employee)
app.use('/weddings',weddings)
app.use('/indications',indications)
app.use('/delivery',delivery)
app.use('/stores',stores)

//init app
app.listen(port, function () {
    console.log('app listening on port 3000!');
    console.log('listo')
});
