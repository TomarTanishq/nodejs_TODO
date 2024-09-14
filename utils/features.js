import jwt from "jsonwebtoken"
import { config } from "dotenv";
config({path:"./data/config.env"})
export const sendCookie = (user, res, message, statusCode = 200) => {

    const token = jwt.sign({ _id: user._id }, "ballupardhankiammijordaarhai", {
        expiresIn: "1h"
    })

    console.log(process.env.NODE_ENV);
    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        // sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        sameSite:"none",
        // secure: process.env.NODE_ENV === "Development" ? false : true
        secure: true

    }).json({
        success: true,
        message
    })
}
