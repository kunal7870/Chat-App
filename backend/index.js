import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoute from "./routes/user.route.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import messageRoute from "./routes/message.route.js"
import { app, server } from "./SocketIO/server.js"


dotenv.config()

app.use(express.json());   //middleware
app.use(cors());         //using cors
app.use(cookieParser()); 

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_UR

try {
    mongoose.connect(URI)
    console.log("Connected to database")
} catch (error) {
    console.log(error)
}


app.use("/api/user",userRoute); //routes
app.use("/api/message",messageRoute); //routes


// app.get('/', (req, res) => {
//   res.send('Hello Kunal ji!')
// })

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})