import express from "express"
import { getAllUsers, getMyProfile, register, login, logout } from "../controllers/user.js"
import { isAuthenticated } from "../middlewares/auth.js"
import cookieParser from "cookie-parser"
import { takeEmail } from "../middlewares/takeEmail.js"

const router = express.Router()

router.use(cookieParser())

router.get("/all", getAllUsers)

//Post "/users/new"
router.post("/new", register)

//Post 
router.post("/login", login)

//Route "/me" DYnamic Route
router.get("/me", isAuthenticated, getMyProfile)

//Route
router.get("/logout", logout)

export default router