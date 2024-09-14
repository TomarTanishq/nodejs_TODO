import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"
export const app = express()

//Using middleware
app.use(express.json())
app.use("/users",userRouter)
app.use("/task",taskRouter)
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
// app.use(cookieParser());

//Route "/"
app.get("/", (req, res) => {
    res.send("Nice")
})

app.use(errorMiddleware)