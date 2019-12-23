const controller = {}
var admin = require("firebase-admin");
const db = admin.firestore()
controller.all = (req, res) => {
    const ref = db.collection('bodas').doc('2nTuWKymrFsJeK9ctvOj').collection('products')
    const result = ref.get()
    result.then(json=>{
        json.forEach(e=>{
            console.log(e.data())
        })
    })
    .catch(err=>{
        console.log(err)
    })
}
module.exports = controller