const db = require("../database")
const UserRepository = require('../repositories/userRepository');

class CreateUserService {
    constructor() {
        this.db = db;
    }

    async execute(data) {
        const userRepository = new UserRepository()

        const { username, password } = data;

        const checkUsersExists = userRepository.findByUsername(username, this.db)

        if (checkUsersExists) {
            throw new Error("Este usuário já está em uso.");
        }

        return userRepository.save(data, this.db);
    }
}

module.exports = CreateUserService