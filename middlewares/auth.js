import cookieParser from "cookie-parser"
import { User } from "../models/user.js"
import jwt from "jsonwebtoken"



export const isAuthenticated = async (req, res, next) => {

    // console.log(req.cookie);
    const { token } = req.cookies
    // const token = req.cookies['token']
    // const token=req.cookie.token
    // const token=req.cookie?.token
    // const token = req.cookie['token']

    if (!token) return res.status(404).json({
        success: false,
        message: "Login first"
    })

    const decoded = jwt.verify(token, "ballupardhankiammijordaarhai")

    req.user = await User.findById(decoded._id)
    next()
}
