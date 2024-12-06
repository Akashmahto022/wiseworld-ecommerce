import express from 'express'
import { checkAuth, login, logout, register } from '../../controllers/auth/auth.controllers.js'
import { tokenVerify } from '../../middleware/authVerify.middleware.js'

const authRouter = express.Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/logout', tokenVerify, logout)
authRouter.get('/check-auth', tokenVerify, checkAuth)

export default authRouter