const AuthService = require("../services/authService")

class AuthController {
    async login(req, res, next) {
        try {
            const data = req.body

            const authService = new AuthService()
            const result = await authService.execute(data)
    
            return res.status(200).json(result)    
        } catch(error) {
            next(error, req, res, next)
        }
    }
}

module.exports = AuthController