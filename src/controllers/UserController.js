const CreateUserService = require('../services/createUserService');

class UserController {
    async signUp(req, res, next) {
        try {
            const data = req.body

            const createUserService = new CreateUserService()
            const result = await createUserService.execute(data)
    
            return res.status(201).json(result)
        } catch (error) {
            next(error, req, res, next)
        }
    }
}

module.exports = UserController