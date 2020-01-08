const helper = {}
var admin = require("firebase-admin");
const db = admin.firestore()

helper.existProduct = async (id,product) =>{
    let ref = await db.collection('bodas').doc(id).collection('products').get()
    
}        
module.exports = helper