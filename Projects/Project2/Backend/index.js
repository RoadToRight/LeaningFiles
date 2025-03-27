const express = require('express');
require('../Backend/Files/config');
const Users = require('../Backend/Files/users');
const Jwt = require('jsonwebtoken');
const JwtKey = 'CloudUsersAnimations';
const Otp = require('./Files/Otp');

const nodemailer = require('nodemailer')
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())
let otp = "";

/**
 * ? Require and Other essentials
 */
/**
 * ! Email
 */


/**
 * ! Email
 */

/**
 * ! Register Api  Start
 */
app.post("/register", async (req, res) => {

    if (req.body.name && req.body.email && req.body.password) {

        let RegisterCondition = await Users.findOne({ email: req.body.email });

        if (RegisterCondition) {
            res.send({ result: " You Have Already Registered " })

        }
        else {
            let use = new Users(req.body);
            use = await use.save()
            use = await use.toObject()
            delete use.password;

            Jwt.sign({use},JwtKey,(err,token)=>{

             if(err){
                res.send({result:"Something Went Wrong"})
             }else{
                res.send({use,token:token})
             }

            })

        }

    } else {
        res.send({ result: "Please Check The Fields Are Not Empty Or In Valid" });
    }

})

/**
 * ! Login Api  Start
 */
app.post("/login" , async (req,res) =>{

    if(req.body.email && req.body.password){
        let use = await Users.findOne(req.body).select("-password");
        if(use){
           

            Jwt.sign({use} , JwtKey , (err,token) => {

                if(err){
                    res.send({result:"Something Went Wrong"})
                }else{
                    res.send({use,token:token});
                }

            })

        }else{
            res.send({result:"No User Found"});
        }
    }else{
        res.send({ result: "Please Check The Fields Are Not Empty Or In Valid" });
    }
 
  

})



/**
 * ! UpdatPass Api  Start
 */
app.post("/updatePass", async (req,res) => {

   

    if(req.body.password === req.body.Confirmpassword){
        let find = await Users.findOne({email:req.body.email,password:req.body.password});
        let use = await Users.updateOne({email:req.body.email},{$set:{password:req.body.password}})
        
      
        if(find){
            res.send("Please Enter Different Password As Past!");
        }else if(use.modifiedCount === 1){
            res.send("Password Updated SuccessFully!");
        } 
        else{
            res.send("Password Not Updated Some Thing Went Wrong!");
        }
       
    }

})
/**
 * ! Otp Api  Start
 */
let Number = 0 ;
app.post("/otpp",(req,res) => {
    
    console.log(req.body.One)
    console.log(req.body.Two)
    console.log(req.body.Three)
    console.log(req.body.Four)
    let UserTypedCode = req.body.One.concat(req.body.Two,req.body.Three,req.body.Four);
    console.log(UserTypedCode)
    if(UserTypedCode === ""){
        res.send({err:"Please Enter OTP"})
    }
    if(Number < 5){
        if(UserTypedCode === otp){
            res.send({result : true})
            }else{
             console.log("No")

           Number =  Number + 1
           res.send({result : false,Number:Number})
            }
      
      
    }
    else{
        res.send({err:"You Are No Longer To Verify OTP Till 10hours"})
    }


    
  
})

app.get('/email',(req,res) => {

   otp = Otp();
    var transport = nodemailer.createTransport({

        service:'gmail',
        port:587,
        secure:false,
        requireTLS:true,
        auth:{
            user:'syedsameershah2008@gmail.com',
            pass:"zocx swty fyhn ptgp"
        }
    
    
    })
    
    var mailOptions = {
        from:"syedsameershah2008@gma.com",
        to:"syedsameershah2008@gmail.com",
        subject:"Testing",
        text:`${otp}`
    }
    
    
    transport.sendMail(mailOptions,function(err,info){
    
        if(err){
            console.log(err)
        }else{
            console.log(info.response)
        }
    
    })
    res.send({result : otp})
})

app.listen(3000);