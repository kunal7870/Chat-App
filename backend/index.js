import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoute from "./routes/user.route.js"
import cors from "cors"

const app = express()
dotenv.config()

app.use(express.json());   //middleware
app.use(cors());         //uesing cors

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_UR

try {
    mongoose.connect(URI)
    console.log("Connected to database")
} catch (error) {
    console.log(error)
}


app.use("/user",userRoute); //routes


// app.get('/', (req, res) => {
//   res.send('Hello Kunal ji!')
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})