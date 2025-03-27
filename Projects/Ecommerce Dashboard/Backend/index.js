const express = require('express');
require("./DB/config");
const Users = require('./DB/Users')
const Product = require('./DB/Products')
const cors = require('cors');
var jwt = require('jsonwebtoken');
var JwtKey = "Sameer";
// Modules
split

const app = express();
app.use(express.json())
app.use(cors())
app.post('/register', async (req, resp) => {

    let check = Users.find(req.body);

    if(check){
        resp.send({Already:"You Are Already Registered"})
    }else{
        let users = new Users(req.body);
        let Data = await users.save()
        Data = await Data.toObject();
        delete Data.Password;
    
            jwt.sign({Data} , JwtKey , (err,token) => {
    
             if(err){
                resp.send("some thing went wrong")
             }
                resp.send({Data,token:token})
             
    
            })
    }

   
})

app.post('/login', async (req, res) => {

    if (req.body.Email && req.body.Password) {
        let users = await Users.findOne(req.body).select("-Password");

        if (users) {
            jwt.sign({users} , JwtKey , (err,token) => {

             if(err){
                res.send("some thing went wrong")
             }else{
                res.send({users,token:token})
             }

            })
            


        }else{
            res.send({result:"No User Found"})
        }


    } else {
        res.send({result:"Field Is Empty"})
    }
   

})

app.post('/addproducts',async(req,res) => {

    let products = new Product(req.body);
    let Data = await products.save();
    res.send(Data)

})
app.get('/products' ,async (req,res) => {

    let products = await Product.find(req.body);
        
   if(products.length > 0){
    res.send(products)
   }else{
    res.send("No Products Avalaible")
   }

})

app.delete('/deleteproduct/:_id',async(req,res) => {
   
    

    let result = await Product.deleteOne({_id:(req.params)});
    
   

    res.send(result)
    console.log(req.params)
})

app.delete('/deleteAllproduct',async(req,res) => {

    let result2 = await Product.deleteMany({});
    res.send(result)
})

app.get('/refill/:id',async(req,res) => {

    let result = await Product.findOne({_id:req.params.id})
    if(result){
        res.send(result)
    }else{
        res.send("No Product Found")
    }

})
app.put('/update/:id',async(req,res) => {

    let result = await Product.updateOne({_id:req.params.id},

        {
            $set:req.body
        }

    )
    res.send(result)

})

app.get('/search/:key' , async (req,res) => {

    let result = await Product.find({
        "$or":[

            {Title:{$regex:req.params.key}},
            {Category:{$regex:req.params.key}},
            {Brand:{$regex:req.params.key}}
        ]
    })
    res.send(result)
})


const verifyToken = (req,res,next) => {

    let token = req.headers[`authorization`];
    if(token){

        token  = token.split(" ")[1];
        jwt.verify(token,JwtKey,(err,valid) => {

            if(err){
                res.send("Enter Valid Token")
            }else{
                next();
            }

        })

    }else{

        res.send("Enter Your Token In Headers")

    }

}


app.listen(4000);




