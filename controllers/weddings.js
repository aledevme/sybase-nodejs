const controller = {};
//firebase
var admin = require("firebase-admin");
const db = admin.firestore()
const helper = require('../model/wedding')
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
        email:req.body.email,
        lastnameboyfriend:req.body.lastnameBoyfriend,
        lastnamegirlfriend:req.body.lastnameGirlfriend,
        nameboyfriend: req.body.nameboyfriend,
        namegirlfriend:req.body.namegirlfriend,
        latitude:0,
        longitude:0
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
                        product:e.data().product
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
controller.getOneProduct = async (req, res) => {
    var result = []
    var wedding = db.collection('bodas').doc(req.params.id).collection('products').doc(req.params.productId)
    result.push({
        id:wedding.id,
        ...(await wedding.get()).data()
    })
    res.send(result)
}
controller.addProduct = async (req, res) =>{
    try {
        //collection weddings products
        var wedding = await db.collection('bodas').doc(req.body.id).collection('products')
        //get products collection
        var products = await db.collection('bodas').doc(req.body.id).collection('products').get()
        //document
        let document = await db.collection('bodas').doc(req.body.id).get()
        //result of products wedding
        var result = []
        //list of documents of weddings
        let listproducts = await db.collection('bodas').doc(req.body.id).collection('products').get()
        //verify if subcollection exist
        if(products.docs.length > 0){
            //if wedding exist
            if(document.exists){
                //get all products of wedding
                listproducts.forEach(e=>{
                    result.push({
                        product: parseInt(e.data().product)
                    })
                })
                //if item product exist in gifts table
                if(result.find(data => parseInt(data.product) === parseInt(req.body.code))){
                    res.send({
                        exist:true,
                        data:'this item exist'
                    })
                }
                else{
                    //if dont exist create a document in subcollection
                    const result = await wedding.add({
                        product:req.body.code,
                        count:req.body.count
                    })
                
                    result ? res.send({
                        exist:false,
                        data:'Product added to wedding!'
                    }) : 
                    res.send({
                        data:'Failed to add product'
                    })
                }
                
            }  
            else{
                res.send({
                    data:'Document not found',
                    status:404
                })
            }
            
        }
        else{
            const result = await wedding.add({
                product:req.body.code,
                count:req.body.count
            })
        
            result ? res.send({
                data:'Product added to wedding!'
            }) : 
            res.send({
                data:'Failed to add product'
            })
        }
        
    } catch (error) {
        console.log(error)
    }
    
}
controller.updateProductCount = async (req, res) =>{
    try {
        let wedding = await db.collection('bodas').doc(req.params.id).collection('products').doc(req.params.productId)
        wedding.update({
            'count':req.body.count
        })
        res.send({
            data:'Succesfully updated'
        })
    } catch (error) {
        console.log(error)
    }
}
controller.deleteProduct = async (req, res) => {
    try {
        let wedding = await db.collection('bodas')
        .doc(req.body.documentId)
        .collection('products')
        .doc(req.body.docproductId)
        .delete();

        wedding ? res.send({
            data:'Product deleted succesfully'
        }) : 
        res.send({
            data:'Failed to delete product'
        })
    } catch (error) {
        console.log(error)
    }
}
controller.getListIndications = async (req, res)=>{
    var indications = []
    let ref = await db.collection('bodas').doc(req.params.id).collection('indications').get()
    
    ref.forEach(json=>{
        indications.push({
            id:json.id,
            ...json.data()
        })
    })

    res.send(indications)
}
controller.updateStatusIndication = async (req, res) => {
    try {
        let wedding = await db.collection('bodas').doc(req.params.id).collection('indications').doc(req.params.indicationId)
        wedding.update({
            'status':req.body.status
        })
        res.send({
            data:'Succesfully updated'
        })
    } catch (error) {
        console.log(error)
    }
}
controller.deleteIndication = async(req, res) => {
    try {
        let result = await db.collection('bodas')
        .doc(req.params.id)
        .collection('indications')
        .doc(req.params.idIndication)
        .delete();

        result ? res.send({
            data:'Indication deleted succesfully'
        }) : res.send({
            data:'Indication can not deleted'  
        })
    } catch (error) {
        console.log(error)
    }
}
controller.updateLocation = async(req, res) => {
    try {
        let wedding = await db.collection('bodas').doc(req.params.id)
        wedding.update({
            'latitude':req.body.latitude,
            'longitude':req.body.longitude
        })
        res.send({
            data:'Succesfully updated'
        })
    } catch (error) {
        console.log(error)
    }
}
controller.createDelivery = async(req, res)=>{
    try {
        var result = []
        let wedding = db.collection('bodas').doc(req.body.id).get()

        if((await wedding).exists){
            let products = db.collection('bodas').doc(req.body.id).collection('products')
            let getProducts = (await products.get())
            getProducts.forEach(e=>{
                result.push({
                    id:e.id,
                    product:e.data().product
                })
            })
            
            const found = result.find(data => data.product === req.body.product)
            console.log(found)
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

module.exports = controller