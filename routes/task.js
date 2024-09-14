import { deleteTask, newTask, updateTask } from "../controllers/task.js"
import express from "express"
import { isAuthenticated } from "../middlewares/auth.js"
import cookieParser from "cookie-parser"
import { showTask } from "../controllers/task.js"

const router = express.Router()

router.use(cookieParser())

router.post("/new", isAuthenticated, newTask)

router.post("/my", isAuthenticated, showTask)

router.route("/:id")
    .put(isAuthenticated, updateTask)
    .delete(isAuthenticated, deleteTask)


export default router