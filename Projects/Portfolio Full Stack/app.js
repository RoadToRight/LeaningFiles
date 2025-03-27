import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import dbConnection from './Database/dbConnection.js';
import {errorMiddleware} from './MIDDLEWARES/error.js'
import messageRouter from './Router/messageRoutes.js';
import { register } from './controller/usersController.js';


const app = express();

dotenv.config({path:'./config/config.env'})

app.use(cors({
    origin:[process.env.PORTFOLIO_URL,process.env.DASHBOARD_URL],
    methods:["GET","POST","DELETE","PUT"],
    credentials:true
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}))

app.use("/api/v1/message",messageRouter)
app.use("/api/v1/user",register)

dbConnection();

app.use(errorMiddleware())

export default app;