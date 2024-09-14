import { Task } from "../models/task.js"

import cookieParser from "cookie-parser"
import { User } from "../models/user.js"
import jwt from "jsonwebtoken"
import ErrorHandler from "../middlewares/error.js"



export const newTask = async (req, res, next) => {
    const { title, description } = req.body

    await Task.create({
        title,
        description,
        user: req.user
    })

    res.status(201).json({
        success: "true",
        message: "Task added"
    })
}

export const showTask = async (req, res, next) => {
    const userId = req.user._id

    const tasks = await Task.find({ user: userId })

    res.status(200).json({
        success: true,
        tasks
    })
}
export const updateTask = async (req, res, next) => {

    const task = await Task.findById(req.params.id);
    
    if(!task) return next(new Error("Invalid Id"))

    task.isCompleted = !task.isCompleted

    await task.save()


    res.status(200).json({
        success: true,
        message: "Task updated"
    })
}

export const deleteTask = async (req, res, next) => {

    const task=await Task.findById(req.params.id)

    if(!task) return next(new ErrorHandler("Task not found",404))

    await task.deleteOne()

    res.status(200).json({
        success: true,
        message:"Task deleted"
    })
}