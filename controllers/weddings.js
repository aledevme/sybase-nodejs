const controller = {};
const dbWeeding = './db/weddings.json'
const fs = require('fs')
const multer = require('multer')

const Storage = multer.diskStorage({
    destination(req, file, callback) {
      callback(null, './images')
    },
    filename(req, file, callback) {
      callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
    },
  })
  
const upload = multer({ storage: Storage })

controller.all = (req,res) => {
    const data = fs.readFileSync(dbWeeding);
    const result = JSON.parse(data)
    console.log(result)
    if(result.weddings.length > 0){
        res.send({
            code:200,
            data:result,
            count:result.weddings.length
        });
    }else{
        res.send({
            code:404,
            data:'No weddings',
        });
    }
}
controller.create = (req,res) =>{
    res.send(req.body)
}
controller.update = (req, res) =>{
    res.send(req.body)
}
controller.findOne = (req,res) =>{
    const data = fs.readFileSync(dbWeeding);
    const result = JSON.parse(data)
    res.send({
        data : result.weddings.find(wedding => wedding.id === parseInt(req.params.id))
    })
}
controller.countWeddings = (req,res) =>{
    const data = fs.readFileSync(dbWeeding);
    res.send(data.length)
}

controller.findProduct = (req,res) =>{
    const data = fs.readFileSync(dbWeeding);
    const result = JSON.parse(data)

    var products = [];
    
    result.weddings.map((json)=>{
        if(json.id == req.params.idwedding){
            json.products.find((element)=>{
                if(element.id == req.params.idproduct){
                    products = element
                }
            })
        }
    })

    
    if(products){
        res.json({
            code:200,
            data:products
        })
    }
    else{
        res.json({
            code:404,
            data:'Not found'
        })
    }
}
controller.search = (req, res) =>{
    const data = fs.readFileSync(dbWeeding);
    const result = JSON.parse(data)
    var information 
    result.weddings.map((json)=>{
        if(req.body.lastname == json.lastnameBoyFriend){
            information = json
            console.log(json)
        }
    })
    console.log(information)
    if(information){
        res.send({
            code:200,
            data:information
        })
    }else{
        res.send({
            code:404,
            data:'Not found'
        })
    }
}

controller.uploadPhoto = upload.array('photo',3), (req,body) =>{
    console.log(req.body)
}

module.exports = controller