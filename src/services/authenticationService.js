const UserRepository = require('../repositories/userRepository');
const AppError = require('../utils/appError');

const jwt = require('jsonwebtoken');

class AuthenticationService {

    async execute(idToken) {
        const userRepository = new UserRepository()

        const tokenDetail = await jwt.verify(idToken, process.env.JWT_SECRET_KEY)

        const freshUser = await userRepository.findById(tokenDetail.id)

        if (!freshUser) {
            throw new AppError('Falha na autorização.', 400)
        }

        return freshUser
    }
}

module.exports = AuthenticationService