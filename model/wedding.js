const helper = {}
var admin = require("firebase-admin");
const db = admin.firestore()

helper.existProduct = (doc, product) =>{
    var wedding = db.collection('bodas').doc(doc).collection('products')
    const result = wedding.where('product' == product)
    if(result){
        return false    
    }
    else {
        return true
    }
}        
module.exports = helper