const LoginService = require("../services/loginService")
const AuthenticationService = require("../services/authenticationService")
const AppError = require("../utils/appError")

class AuthController {
    async login(req, res, next) {
        try {
            const data = req.body

            const loginService = new LoginService()
            const token = await loginService.execute(data)

            const result = { 
                status: "success",
                data: {
                    token
                }
            }
    
            return res.status(200).json(result)    
        } catch(error) {
            next(error, req, res, next)
        }
    }

    async authentication(req, res, next) {
        try {
            let idToken = ''

            if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
                idToken = req.headers.authorization.split(' ')[1]
            }
    
            if (!idToken) {
                return next(new AppError('Faça o login para ter acesso.', 401))
            }
    
            const authenticationService = new AuthenticationService()
    
            const freshUser = await authenticationService.execute(idToken)
            req.user = freshUser
    
            return next()
        } catch (error) {
            next(error, req, res, next)
        }
    }
}

module.exports = AuthController