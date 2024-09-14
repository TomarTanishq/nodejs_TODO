import { User } from "../models/user.js";
import bcrypt from "bcrypt"
import { sendCookie } from "../utils/features.js";
import cookieParser from "cookie-parser";
import { isAuthenticated } from "../middlewares/auth.js";

export const getAllUsers = async (req, res) => { }

//register function
export const register = async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) return res.status(404).json({
        success: false,
        message: "User already exists"
    })

    const hashedPassword = await bcrypt.hash(password, 10)

    user = await User.create({ name, email, password: hashedPassword })

    sendCookie(user, res, "Registered", 201)

}

export const login = async (req, res) => {
    // const { email, password } = req.body;
    const email = req.body.email
    const password = req.body.password

    const user = await User.findOne({ email }).select("+password")

    if (!user) return res.status(404).json({
        success: false,
        message: "Invalid email or password"
    })

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) return res.status(404).json({
        success: false,
        message: "Invalid email or password"
    })

    // console.log(res);
    sendCookie(user, res, `Welcome Back, ${user.name}`, 200)
}

//getMyProfile function
export const getMyProfile = (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user
    })

}

export const logout = (req, res) => {
    res.status(200).cookie("token", "", {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true
    }).json({
        success: true,
        message: "User logged out successfully"
    })
}