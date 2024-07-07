const UserRepository = require('../repositories/userRepository');
const AppError = require('../utils/AppError');

class CreateUserService {

    async execute(data) {
        const userRepository = new UserRepository()

        const { username, password } = data

        if (!username || !password) {
            throw new AppError('Usuário e senha são necessários.', 400)
        }

        const checkUsersExists = await userRepository.findByUsername(username)

        if (checkUsersExists) {
            throw new AppError('Este usuário já existe.', 409)
        }

        const newUser = await userRepository.save(data)

        if (!newUser) {
            throw new AppError('Falha ao criar o usuário.', 500)
        }

        return newUser
    }
}

module.exports = CreateUserService