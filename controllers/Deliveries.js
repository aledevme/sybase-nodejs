const controller = {}

var admin = require("firebase-admin");
const db = admin.firestore()


controller.saveDelivery = async (req, res) => {
    let ref = await db.collection('bodas').doc(req.params.id)
    
    let delivery = ref.collection('Deliveries')
    let products = ref.collection('products')
    
    const result = ref.add({
        date: req.body.date,
        productId:req.params.code,
        count:req.params.count
    })

    if(result){
        
    }
}
module.exports = controller