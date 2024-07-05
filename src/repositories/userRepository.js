const { hash } = require("bcryptjs");

class UserRepository {
    async findByUsername(username, db) {
        const userExists = await db.oneOrNone("SELECT * FROM Users WHERE username = $1", username)
        return userExists
    }

    async save(user, db) {
        const hashedPassword = await hash(user.password, 8)
        await db.none("INSERT INTO Users (username, password) VALUES ($1, $2)", [user.username, hashedPassword])
        return user
    }
}

module.exports = UserRepository