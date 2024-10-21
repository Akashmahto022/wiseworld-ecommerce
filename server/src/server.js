import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env"
})

// create a database connection
connectDB()
.then(()=>{
  app.listen(process.env.PORT || 5000, ()=>{
    console.log(`server is running at http://localhost:${process.env.PORT}`)
  })
})
.catch((error)=>{
  console.log("MongoDB Connectiong  failed !!", error.message)
})


