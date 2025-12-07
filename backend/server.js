import dotenv from "dotenv";
dotenv.config();
import express from "express"
import cookie from "cookie-parser"
import authRoute from "./src/routes/auth.route.js"
import connectDb from "./src/db/db.js";
import notesRoute from "./src/routes/notes.route.js"
const app = express();

app.use(express.json());
app.use(cookie());


app.use("/api/auth",authRoute);
app.use("/api/notes",notesRoute)










app.listen(4000,(req,res)=>{
    console.log("Connected to port 4000");
    connectDb();
})