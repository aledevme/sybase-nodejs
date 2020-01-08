const express = require('express')
const cors = require('cors');

//init mail
var nodemailer = require('nodemailer');

//init firebase server
var admin = require("firebase-admin");
var serviceAccount = './token.json'
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://reactnative-27c72.firebaseio.com"
});
/*let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'popmoviesshop@gmail.com',
        pass: 'shopOnline@2019$'
    }
});

let mailOptions = {
    from: 'popmoviesshop@gmail.com',
    to: 'alexgve7@gmail.com',
    subject: 'Test',
    text: 'Hello World!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error.message);
    }
    console.log('success');
});
*/

//init app
const app = express()
const bodyparser = require('body-parser'); 
const port = process.env.PORT || 3000

//objects routes
const weddings = require('./routes/weddings')
const employee = require('./routes/employee')
const indications = require('./routes/indications')
const delivery = require('./routes/Deliveries')
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

//init app
app.listen(port, function () {
    console.log('app listening on port 3000!');
    console.log('listo')
});