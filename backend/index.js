import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoute from "./routes/user.route.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import messageRoute from "./routes/message.route.js"
import { app, server } from "./SocketIO/server.js"
import path from "path"


dotenv.config()
const PORT = process.env.PORT || 5000;

app.use(express.json());   //middleware
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3002",
  "https://chat-app-frontend.onrender.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);        //using cors
app.use(cookieParser()); 


const URI = process.env.MONGODB_URI

try {
    mongoose.connect(URI)
    console.log("Connected to database")
} catch (error) {
    console.log(error)
}


app.use("/api/user",userRoute); //routes
app.use("/api/message",messageRoute); //routes


//-------code for deployment---------
// if(process.env.NODE_ENV === "production"){
//   const dirPath = path.resolve();
//   app.use(express.static("./frontend/dist"));
//   app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(dirPath,"./frontend/dist","index.html"))
//   })
// }
// app.get('/', (req, res) => {
//   res.send('Hello Kunal ji!')
// })

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
