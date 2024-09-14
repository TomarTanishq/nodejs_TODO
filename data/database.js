import mongoose, { Mongoose } from "mongoose";

//Connecting Database
export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
    dbName: "backendapi"
    }).then((c) => console.log(`DB connected with ${c.connection.host}`))
    .catch((e) => console.log(e))
}