import { catchAsyncErrors } from "../Middlewares/catchAsyncError.js";
import fs from "fs";
import { generateToken } from "../Utils/GenerateToken.js";
import { eventBus } from "../../EventBus.js";
import crypto from "crypto"
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
// import a from "../thirdfile.mjs";

// a()

let SchemaDoNotUse = new mongoose.Schema({
    collectionfields:String,
    
})
const DoNot = mongoose.model("DoNotChange",SchemaDoNotUse)

let algorithm = "aes-256-ctr"
const Path = "./routes.json"
export let SchemaGenerating = [];
let EnvValues = {};
const getApp = async () => {
  const app =await  import("../../app.js")
//   console.log(process.env.PORT)
EnvValues.DATA_SAVER  = await process.env.DATA_SAVER
EnvValues.TOKEN_KEY  = await process.env.TOKEN_KEY
}

const encryptJsonData = async (OriginalData) => {



    // eventBus.on("DATA_SAVER", (KEY) => {
        // const key = deriveKey(KEY,salt)
    await getApp();
    const jsonString = JSON.stringify(OriginalData, (key, value) => {
        if (key === 'secret') return value; // Include the 'secret' property
        return value;
      });
    //   const parse = JSON.parse(jsonString)
    // JSON.stringify(OriginalData)
    // console.log(parse[0])
    // console.log(typeof OriginalData);  // Check the type of OriginalData
// console.log(Array.isArray(OriginalData));  // Check if it's an actual array
      const a = ` [

  {
    "collection": "Sameer",
    "actions": [
      { "FindOne": false},
      { "Find": false },
      { "Create": false },
      { "Update": false },
      { "Delete": false }
    ],
    "TotalFields": [
      { "name": "Sameer1", "type": { "id": 1, "name": "Text" } },
      { "name": "Sameer2", "type": { "id": 1, "name": "Text" } }
    ]
  },
  {
    "collection": "Shah",
    "actions": [
      { "FindOne": false },
      { "Find": false },
      { "Create": false },
      { "Update": false },
      { "Delete": false }
    ],
    "TotalFields": [{ "name": "Sahh1", "type": { "id": 1, "name": "Text" } }]
  },
  {
    "collection": "Hussain",
    "actions": [
      { "FindOne": false },
      { "Find": false },
      { "Create": false },
      { "Update": false },
      { "Delete": false }
    ],
    "TotalFields": [{ "name": "Hussain1", "type": { "id": 1, "name": "Text" } }]
  }
]
`
        const cipher =  crypto.createCipher(algorithm, EnvValues.DATA_SAVER);
        let encrypted = cipher.update(a, "utf8", "hex");
        encrypted += cipher.final("hex");
        console.log(encrypted)
   try {
 
    let find = await DoNot.find({} , "collectionfields");

    if(find.length === 0){
        let document = await DoNot.create({collectionfields:encrypted})
    }else{
        let update  = await DoNot.updateOne({$set:{collectionfields:encrypted}})
    }
 
 
    return 1;
   } catch (error) {
    console.log(error)
    return 0;
   }
        // return encrypted;
       
    // })

}
encryptJsonData()

export const decryptJsonData = async () => {
    // return new Promise((resolve, reject) => {
       
  
     

        let Collectionfields = await DoNot.findOne({},"collectionfields");

       let Encrypted =Collectionfields?.collectionfields || "data"
    // console.log(Encrypted)
        let decryptedData;
        await getApp();
        // eventBus.on("DATA_SAVER", (KEY) => {
            try {
                const deCipher = crypto.createDecipher(algorithm, EnvValues.DATA_SAVER );
                let decrypted = deCipher.update(Encrypted, "hex", "utf8")
                decrypted += deCipher.final("utf8");
                decryptedData = decrypted;
              return decryptedData

            } catch (error) {
                console.log(error)
             
            }

            // console.log(decrypted)


        // })

    // })


}


export const sendDataToFrontEnd = catchAsyncErrors(async(req,res,next) =>{

        try {
           
            let Data = await decryptJsonData();
           
      
            let PerfectData = JSON.parse(Data)
            res.status(200).json({
                success:true,
               data:PerfectData
             })
        //    if(!PerfectData){
        //     res.status(200).json({
        //         success:true,
        //         message:"nice"
        //     })
        //    }else{
        //     res.status(200).json({
        //         success:true,
        //         message:"error"
        //     })
        //    }
        } catch (error) {
            res.status(200).json({
                success:true,
                message:error
            })
        }
    

   })


export const CreateDynamicApi = catchAsyncErrors(async (req, res, next) => {

    // await LoadRoutes(); 
    const { CollectionCreate, CollectionCreate2 = [] } = req.body;
    // console.log("Request received:");
    // console.log(CollectionCreate)
    // console.log(CollectionCreate2)
    if (CollectionCreate2.length) {
        // let Route1 ;
        //     CollectionCreate.forEach((X) => {

        //             let sanitizedCollectionName =  X.collection.replace(/[^a-zA-Z0-9_]/g, '');
        //             Route1 = {collection:sanitizedCollectionName,TotalFields:X.TotalFields}



        //     })

        SchemaGenerating.push(CollectionCreate2)
        saveRoutes(CollectionCreate2, res)

    } else if (CollectionCreate.collection) {

        let Route = CollectionCreate;
        SchemaGenerating.push(Route)
        saveRoutesTWO(Route, res)
    }

    // }else{
    //     let sanitizedCollectionName =  collectionName.replace(/[^a-zA-Z0-9_]/g, '');
    //     let Route = {collection:sanitizedCollectionName,TotalFields}
    //     SchemaGenerating.push(Route)
    //     saveRoutes(Route,res)
    // }
})

export const deleteCollection = catchAsyncErrors(async(req,res,next) => {
    {

        const {collectionName} = req.body;

      let PrevData =  await decryptJsonData();
      PrevData = JSON.parse(PrevData);
     let FilterData = PrevData.filter((x) => {
        return x.collection !== collectionName;
      })

      console.log(FilterData)

    let encryptSuccess =  encryptJsonData(FilterData)

    if(encryptSuccess){
        res.json({
            success:true,
            message:"Collection Successfully Deleted!"
        })
    }
    
    }
})


export const UpdateActions = catchAsyncErrors(async (req, res, next) => {

    const { ActionUpdates } = req.body;
    // console.log(ActionUpdates)

    if (ActionUpdates) {
        // generateToken();
        saveRoutesThree(ActionUpdates, res);

    }

})

export const TokenApplication = async(PreviousData,res) => {


    let allTokenNames = [];


    PreviousData.forEach((X) => {

    
        let FilterTokenDetails = X.actions.map((x) => {
            return x.TokenDetails && x.TokenDetails.TokenName;
        });

      
        FilterTokenDetails.forEach((value) => {
            if (value !== undefined && value !== '' && !allTokenNames.includes(value)) {
                allTokenNames.push(value); 
            }
        });

    });

// console.log(allTokenNames)
    await getApp();

 let bufferedToken =   allTokenNames.map((TokenName) => {
    console.log(TokenName)
     let Token =   jwt.sign(TokenName,TokenName,{algorithm:"HS256"})
     console.log(Token)
     let buffer = Buffer.from(Token).toString("base64url");
 
     return buffer;
    })

  res.status(200).cookie("hello","fadsfS",{
    sameSite: 'None',
    httpOnly:true,
    secure:false
  }).json({
    success:true,
    message:"Cookie send"
  })


    console.log(bufferedToken)

}
const saveRoutesThree = async (ActionUpdates, res) => {


  let  PreviousData = await decryptJsonData()
    if (PreviousData) {
        PreviousData = JSON.parse(PreviousData);
    }
    PreviousData.forEach((item, index) => {

        const ActionUpdatesMap = ActionUpdates.find((c) => {

            return c.collection === item.collection;

        })

        let Final = item.actions.map((x, i) => {
            let Keys = Object.keys(x)[0];
            let Values = Object.values(x)[0];
            let Values2 = Object.values(x);
            console.log(Values2)
            if(x.TokenDetails){
                return   { [Keys]: Values,TokenDetails:x.TokenDetails}
        }
        else if(ActionUpdatesMap.actions[i].TokenDetails){
                return   { [Keys]: Object.values(ActionUpdatesMap.actions[i])[0] ,TokenDetails:ActionUpdatesMap.actions[i].TokenDetails}
             }
          
             else{
                return   { [Keys]: Object.values(ActionUpdatesMap.actions[i])[0]}
             }
        })

        // console.log(Final)

        let actions = item.actions.filter((v) => {
            return item.collection === ActionUpdatesMap.collection;
        })

        if (actions) {
            item.actions = Final;
        }

        encryptJsonData(PreviousData)
    
       
    })
    TokenApplication(PreviousData,res)
    
 


}

const saveRoutesTWO =async (Route, res) => {


    let  PreviousData = await decryptJsonData();

    let itemToUpdate = PreviousData.find((x) => {

        return x.collection === Route.collection;
    })
    if (itemToUpdate) {
        // console.log(itemToUpdate)
        const existingNames = new Set(itemToUpdate.TotalFields.map(field => field.name));

        Route.TotalFields.forEach(field => {
            if (!existingNames.has(field.name)) {
                itemToUpdate.TotalFields.push(field);
               
            } else {
             
            }
        });

   
        encryptJsonData(PreviousData)

    }
    else {
        console.log("Save route2 error");
    }

    res.status(200).json({
        success: true,
        message: "Collection Created"
    })
}

const saveRoutes = (Route, res) => {
    encryptJsonData(Route)
    res.status(200).json({
        success: true,
        message: "Collection Created"
    })
}

export const LoadRoutes = async () => {
 
     
        try {
            let Data = await decryptJsonData();
            if(Data.length > 4){
                Data = JSON.parse(Data)
                SchemaGenerating = await Data
                return []  
            }
        

            // return Data
                            
        
        } catch (error) {
            console.log("Error Parsing Error", error)
            SchemaGenerating= []
        }
    
    return []
}




export const fieldEdit = catchAsyncErrors(async (req, res, next) => {

    const updatedData = JSON.stringify(req.body, null, 2);

    let updated = await encryptJsonData(req.body)


    if(!updated){
        res.status(500).json({
            success: false,
            message: "Field Editing Failed!"
        });
    }else{
        res.status(200).json({
            success: true,
            message: `Field Editing Successfully!`,

        });
    }





})

export const fieldDelete = catchAsyncErrors(async (req, res, next) => {

    // const updatedData = JSON.stringify(req.body, null, 2);
    // console.log(updatedData)
    let updated = await encryptJsonData(req.body)


    if(!updated){
        res.status(500).json({
            success: false,
            message: "Field Deletion Failed!"
        });
    }else{
        res.status(200).json({
            success: true,
            message: `Field Deleted Successfully!`,

        });
    }

  

})