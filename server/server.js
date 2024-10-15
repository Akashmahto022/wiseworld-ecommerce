import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import authRouter from "./routes/auth/auth.route.js";

// create a database connection
mongoose
  .connect(
    "mongodb+srv://akashmahto2272003:wiseworld5060@cluster0.0xrfe.mongodb.net/"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("error connecting in MongoDB", error.message));

const app = express(); 
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],  
    Credential: true,
    allowedHeaders:true
  })
);

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRouter)

app.get('/',(req, res)=>{
  res.send("your are On Now")
})

app.listen(PORT, () => console.log(`server is running on the port http://localhost:${PORT}`));


