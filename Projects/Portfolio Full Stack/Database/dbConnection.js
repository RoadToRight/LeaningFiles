import mongoose from "mongoose";

const dbConnection = () => {

    mongoose.connect(process.env.MONGO_URI, {
        dbName: "PORTFOLIO"
    }).then(() => console.log("Connected To DataBase")).catch((err) => console.log(`Some Eroor Occured While Connecting DataBase ${err}`))

}

export default dbConnection;