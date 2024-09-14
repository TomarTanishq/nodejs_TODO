import mongoose, { Mongoose } from "mongoose";

//Connecting Database
export const connectDB = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "backendapi"
    }).then(() => console.log("DB connected"))
    .catch((e) => console.log(e))
}