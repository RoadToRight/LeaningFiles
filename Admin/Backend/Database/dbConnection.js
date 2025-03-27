import mongoose from "mongoose";

const dbConnection = () => {

    mongoose.connect(process.env.MONGO_URI,{
        dbName:"CMS_PROJECT"
    }).then(() => console.log(`DataBase Connected`)).catch(() => console.log(`Some Error Occured While Connecting Database`))

}

export default dbConnection;