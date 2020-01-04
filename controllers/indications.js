const controller = {}

var admin = require("firebase-admin");
const db = admin.firestore()

controller.addIndication = async (req, res) => {
    console.log(req.body)
    try {
        let ref = await db.collection('bodas').doc(req.body.docId).collection('indications')

        const result = ref.add({
            indication:req.body.indication,
            status:false
        })

        result ? res.send({
            data : 'Indication added to wedding succesfully'
        })
        : 
        res.send({
            data : 'Failed to add indication'
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = controller