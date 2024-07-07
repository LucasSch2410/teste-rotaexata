const address = require("../db/models/address")

class UserRepository {
    constructor () {
        this.address = address
    }

    async save(data) {

        const newAddress = await this.address.create({
            cep: data.cep,
            city: data.city,
            neighborhood: data.neighborhood,
            street: data.street,
            number_house: data.number_house,
            state_name: data.state_name,
            createdBy: 1
        })

        return newAddress
    }
}

module.exports = UserRepository