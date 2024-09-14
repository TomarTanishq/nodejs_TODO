import mongoose from "mongoose"

//Defining Schema
const schema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

//Defining Model
export const User = mongoose.model("User", schema)
