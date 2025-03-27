import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import fs from "fs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bycrypt from "bcryptjs"
/**
 * !
 */
import { errorMiddleware } from "./Backend/Middlewares/error.js";
import dbConnection from "./Backend/Database/dbConnection.js";
import CreateApiRouter from "./Backend/Router/CreateApi.js"

import { generateToken } from "./Backend/Utils/GenerateToken.js";
import { eventBus } from "./EventBus.js";
import { VerifyToken } from "./Backend/Utils/TokenMidAuth.js";
import a from "./Backend/thirdfile.mjs";
import { LoadRoutes, SchemaGenerating } from "./Backend/Controller/CreateApiController.js";


a();

const app = express();
const Path = "./routes.json"
dotenv.config({ path: "./Backend/.env" })
app.use(express.json())

app.use(cors({
    origin: [process.env.ADMIN],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}))


/**
 * !!!!!    After App Proper Initialization       !!!!!    
 *  */


// let token = generateToken(process.env.JWT_SECRET_KEY)
// eventBus.emit("Token by app", token)
// eventBus.emit("DATA_SAVER", process.env.DATA_SAVER)

// console.log(token)

const registerRoute = (sanitizedCollection, yourSchema) => {
// console.log("Routes register hogai")
    app.get(`/${sanitizedCollection}/find`, async (req, res) => {

        let Response = await VerifyToken("Find", res, sanitizedCollection, req);
        console.log(Response)
        if(Response){
            console.log(Response)
            // const YourModel = mongoose.model(sanitizedCollection, yourSchema);
            // let Data = await YourModel.find()
    
            // if (Data) {
            //     res.status(200).json({
            //         success: true,
            //         message: "Document Get Successfully!",
            //         Data: Data
            //     })
            // } else {
            //     res.status(400).json({
            //         success: false,
            //         message: "Some Thing Went Wrong Try Again!",
            //     })
            // }
            res.status(200).json({
                success:true,
                message: `${Response}`
            })
    
        }
    
    })

    app.get(`/${sanitizedCollection}/findOne`, async (req, res) => {

        VerifyToken("FindOne", res, sanitizedCollection, req);

        // const { conditions } = req.body;

        // const yourModel = mongoose.model(sanitizedCollection, yourSchema);

        // try {
        //     const Data = await yourModel.findOne(conditions);

        //     if (!Data) {
        //         res.status(404).json({
        //             success: false,
        //             message: "Document Not Found Or Condition Is Not Correct"
        //         })

        //     }

        //     res.status(200).json({
        //         success: true,
        //         message: "Document Found!",
        //         Data: Data
        //     })

        // } catch (error) {
        //     res.status(500).json({
        //         success: false,
        //         message: error.message
        //     })
        // }

    })

    app.post(`/${sanitizedCollection}/create`, async (req, res) => {

        VerifyToken("Create", res, sanitizedCollection, req);

        const { Data } = req.body;

        const yourModel = mongoose.model(sanitizedCollection, yourSchema);

        try {

            let DataStatus = await yourModel.insertMany(Data);

            if (!DataStatus) {
                res.status(400).json({

                    success: false,
                    message: "Data is cant be stored successfully!"

                })
            }
            res.status(200).json({

                success: true,
                message: "Data is successfully stored in Database"

            })
        } catch (error) {
            res.status(500).json({

                success: false,
                message: error.message

            })
        }

    })

    app.post(`/${sanitizedCollection}/update/:id`, async (req, res) => {

        VerifyToken("Update", res, sanitizedCollection, req);

        const yourModel = mongoose.model(sanitizedCollection, yourSchema);

        try {
            const updatedDocument = await yourModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
            if (!updatedDocument) {
                res.status(404).json({ message: "Document not found" });
            }
            res.json(updatedDocument);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })
    app.delete(`/${sanitizedCollection}/delete/:id`, async (req, res) => {

        let Response = await VerifyToken("Delete", res, sanitizedCollection, req);
        console.log(Response)
        if(Response){
            console.log(Response)
        // const YourModel = mongoose.model(sanitizedCollection, yourSchema);
        // try {
        //     const deletedDocument = await YourModel.findByIdAndDelete(req.params.id);
        //     if (!deletedDocument) {
        //         return res.status(404).json({ message: "Document not found" });
        //     }
        //     res.json({ message: "Document deleted successfully" });
        // } catch (error) {
        //     res.status(500).json({ message: error.message });
        // }

        res.status(200).json({
            success:true,
            message: `${Response}`
        })
    }
    })

}

const generateSchema  = async () => {
  await  LoadRoutes()
    // const Schema = await SchemaGenerating;
    // console.log(SchemaGenerating)
    // SchemaGenerating.forEach(({ collection, TotalFields }) => {

    //         let sanitizedCollection = collection.replace(/[^a-zA-Z0-9_]/g, "");
        
    //         let schemaDefinition = {};
        
    //         TotalFields.forEach(({ name, type }) => {
    //             schemaDefinition[name] = type === "string" ? String : type === "number" ? Number : type === "boolean" ? Boolean : Object;
    //         })
        
    //         const yourSchema = new mongoose.Schema(schemaDefinition);
        
    //         registerRoute(sanitizedCollection, yourSchema)
        
    //     })
}
generateSchema()




/**
 * ! End Works Of App 
 */
app.use(CreateApiRouter)
dbConnection()
app.use(errorMiddleware)
export const ab = 9;

export default app;