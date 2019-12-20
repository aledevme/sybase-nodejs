const controller = {}
var admin = require("firebase-admin");
const db = admin.firestore()
controller.all = (req, res) => {
    const pasteles = db.collection('pasteles').doc('Bi8PF0MaE1AdeCaOTTtZ')
    pasteles.get()
    .then(doc => {
        if (!doc.exists) {
        console.log('No such document!');
        } else {
        console.log('Document data:', doc.data());
        }
    })
    .catch(err => {
        console.log('Error getting document', err);
    });
}
controller.addPastel = (req, res) => {
    db.collection('pasteles').add({
        name: 'Tokyo',
    }).then(ref => {
        console.log('Added document with ID: ', ref.id);
    });
}
module.exports = controller