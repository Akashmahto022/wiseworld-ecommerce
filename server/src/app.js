import express from 'express'
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(cookieParser())
app.use(express.json())


// route declaration



app.get('/', (req, res)=>{
    res.send("I'm a Software developer")
})


export {app}
