import jwt from 'jsonwebtoken'
import { User } from '../models/User.Model.js';


const tokenVerify = async(req, res, next)=>{
    try {
        const token = await req.cookie?.accessToken;

        if (!token) {
            return res.json({status:false, message: "user not authenticated"})
        }

        const decodeToken = jwt.verify(token, process.env.JWT_KEY_ACCESS_TOKEN)
        const user = await User.findById(decodeToken?.id).select("-password")
        if (!user) {
            res.json({status:false, message: "invalid access token"})
        }

        req.user = user;
        next()
    } catch (error) {
        console.log(error.message)
        res.json({status:false, message: "Error while token verification"})
    }
}

export {tokenVerify}