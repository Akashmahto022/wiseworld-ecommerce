import {User} from '../../models/User.Moduls.js'
import becrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'




//register

const register = async(req, res)=>{
    const {username, email, password} = req.body
    try {
        if (!username && !email && !password) {
            res.status(204).json({
                status: false,
                message: "provide all the details (username, email and password)"
            })
        }

        const alreadyEmailRegister = await User.findOne(email)

        if (alreadyEmailRegister) {
            res.status(409).json({
                status: false,
                message: "User already register with this email"
            })
        }
        const alreadyUsernameRegister = await User.findOne(username)

        if (alreadyUsernameRegister) {
            res.status(409).json({
                status: false,
                message: "User already register with this username, please try something diffrent username"
            })
        }
        

        const hashPassword = await becrypt.hash(password, 10)
        const newUser = new User({
            username, email, password: hashPassword
        })

        await newUser.save()
        res.status(200).json({
            success:true,
            message: "user register successfully",
            data: newUser
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Error while register the user"
        })
    }
}





//login
const login = async(req, res)=>{
    const {email, password} = req.body

    try {
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Error while register the user"
        })
    }
}





//logout
const logout = async(req, rec)=>{

}




//auth middlerware



export {register, login, logout}