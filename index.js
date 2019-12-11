var express = require('express')
var app = express()
var port = process.env.PORT || 3000

app.use('/autores', function(req,res){
    res.send({
        message:'Hola'
    })
});
app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});