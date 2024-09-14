import mongoose from "mongoose"

//Defining Schema
const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true,
        unique:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

//Defining Model
export const Task = mongoose.model("Task", schema)
