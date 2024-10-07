import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'
import cors from 'cors'



// create a database connection
mongoose.connect('mongodb+srv://akashmahto2272003:wiseworld5060@cluster0.0xrfe.mongodb.net/')
.then(()=>console.log('MongoDB Connected'))
.catch(()=>console.log('error connecting in MongoDB'))

const app = express()
const PORT = process.env.PORT || 4000


app.use(
    cors({
        
    })
)
