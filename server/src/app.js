import express from 'express'
import cookieParser from "cookie-parser";
import cors from 'cors'
import authRouter from './routes/auth/auth.route.js';


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(cookieParser())
app.use(express.json())


// route declaration
app.use("/api/auth/user", authRouter)


app.get('/', (req, res)=>{
    res.send("I'm a Software developer")
})


export {app}
