import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB()

//Listen port
app.listen(5000, () => {
    console.log(`Server is wroking in ${process.env.NODE_ENV} mode`);
})