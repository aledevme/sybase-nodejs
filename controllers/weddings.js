const controller = {};
//firebase
var admin = require("firebase-admin");
const db = admin.firestore()

controller.all = (req,res) => {
    var wedding = []
    let citiesRef = db.collection('bodas');
    citiesRef.get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            wedding.push({id:doc.id,...doc.data()})
        });

        res.json({
            data:wedding
        })
    })
    .catch(err => {
        console.log('Error getting documents', err);
    })

}
controller.create = (req,res) =>{
    db.collection('bodas').add({
        datewedding:req.body.date,
        direction:req.body.direction,
        email:req.body.email,
        lastnameboyfriend:req.body.lastnameBoyfriend,
        lastnamegirlfriend:req.body.lastnameGirlfriend,
        nameboyfriend: req.body.nameboyfriend,
        namegirlfriend:req.body.namegirlfriend,
    }).then(ref => {
        res.send(ref.id)
    });
}
controller.update = (req, res) =>{
    res.send(req.body)
}
controller.findOne = async (req,res) =>{
    var data = []
    try {
        let wedding = db.collection('bodas').doc(req.params.id)
        let getWedding = (await wedding.get())

        if(getWedding.exists){
            data.push({
                id:getWedding.id,
                ...getWedding.data()
            })

            res.send(data)
        }
        else{
            res.send({
                data:'Document not found',
                status:404
            })
        }
    } catch (error) {
        console.log(error)
    }
}
controller.products = async (req,res) =>{
    try {
        var list = []
    
        let wedding = db.collection('bodas').doc(req.params.id).get()

        if((await wedding).exists){
            let products = db.collection('bodas').doc(req.params.id).collection('products')
            let getProducts = (await products.get())
            getProducts.forEach(e=>{
                list.push(
                    {
                        id:e.id,
                        product:e.data().name
                    })
            })
            res.send(list)
        }  
        else{
            res.send({
                data:'Document not found',
                status:404
            })
        }  
    } catch (error) {
        console.log(error)
    }
}
controller.addProduct = async (req, res) =>{
    try {

        var wedding = db.collection('bodas').doc(req.params.id).collection('products')

        wedding.doc(req.params.id).set({
            id:req.params.code
        })
    
        result ? res.send({
            data:'Product added to wedding!'
        }) : 
        res.send({
            data:'Failed to add product'
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = controller