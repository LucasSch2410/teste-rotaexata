const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/userRepository');
const { compare } = require("bcryptjs");
const AppError = require('../utils/AppError');

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

class AuthService {
    async execute(data) {
        const { username, password } = data

        if (!username || !password) {
            throw new AppError('Usuário e senha são necessários.', 400)
        }

        const userRepository = new UserRepository();
        const user = await userRepository.findByUsername(username);

        if (!user || !(await compare(password, user.password))) {
            throw new AppError('Usuário ou senha incorretos', 400)
        }
        
        const token = generateToken({
            id: user.id
        })

        const result = { token }

        return result

    }
}

module.exports = AuthService;
