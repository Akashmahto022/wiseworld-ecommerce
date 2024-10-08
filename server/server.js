import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

// create a database connection
mongoose
  .connect(
    "mongodb+srv://akashmahto2272003:wiseworld5060@cluster0.0xrfe.mongodb.net/"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("error connecting in MongoDB", Error));

const app = express(); 
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],  
    Credential: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => console.log(`server is running on the port http://localhost:${PORT}`));