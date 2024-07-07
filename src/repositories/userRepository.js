const { hash } = require("bcryptjs");
const user = require("../db/models/user")

class UserRepository {
    constructor () {
        this.user = user
    }

    async findByUsername(username) {
        const userExists = await this.user.findOne({ where: { username }})

        return userExists
    }

    async findById(id) {
        const user = await this.user.findByPk(id)

        return user
    }

    async save(data) {
        const hashedPassword = await hash(data.password, 8)

        const newUser = await this.user.create({
            username: data.username,
            password: hashedPassword
        })

        return newUser
    }
}

module.exports = UserRepository