import { deleteTask, newTask, updateTask } from "../controllers/task.js"
import express from "express"
import { isAuthenticated } from "../middlewares/auth.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import { showTask } from "../controllers/task.js"

const router = express.Router()

router.use(cookieParser())
router.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

router.post("/new", isAuthenticated, newTask)

router.post("/my", isAuthenticated, showTask)

router.route("/:id")
    .put(isAuthenticated, updateTask)
    .delete(isAuthenticated, deleteTask)


export default router