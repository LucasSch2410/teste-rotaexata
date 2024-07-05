const AppError = require("../utils/AppError")
const CreateUserService = require('../services/createUserService');

class UsersController {
    async create(request, response) {
        const { body } = request

        try {
            const createUserService = new CreateUserService()
            const result = createUserService.execute(body)
    
            return response.json(result)
        } catch (err) {
            return response.json({
                err: err.message
            })
        }

    }
}

module.exports = UsersController