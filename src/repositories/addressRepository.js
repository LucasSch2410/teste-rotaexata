const address = require("../db/models/address")
const AppError = require("../utils/appError")
const { Op } = require('sequelize');

class AddressRepository {
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
            createdBy: data.createdBy
        })

        return newAddress
    }

    async getAll(data) {
        const { userId, keyword } = data;

        const whereCondition = { createdBy: userId }

        if (keyword) {
            whereCondition[Op.or] = [
                { cep: { [Op.like]: `%${keyword}%` } },
                { city: { [Op.like]: `%${keyword}%` } },
                { neighborhood: { [Op.like]: `%${keyword}%` } },
                { street: { [Op.like]: `%${keyword}%` } },
                { number_house: { [Op.like]: `%${keyword}%` } }
            ];
        }

        const addresses = await this.address.findAll({ where: whereCondition });

        return addresses;
    }

    async findById(data) {
        const { userId, id } = data

        const address = await this.address.findOne({
            where: { id:id, createdBy: userId }
        })

        if (!address) {
            throw new AppError('Endereço não encontrado.', 404)
        }

        return address
    }

    async update(data) {
        const { userId, id, ...fieldsToUpdate } = data;

        const [updatedRows] = await this.address.update(fieldsToUpdate, {
            where: { id: id, createdBy: userId }
        })

        if (updatedRows === 0) {
            throw new AppError('Endereço não encontrado ou nada a atualizar.', 404);
        }

        const updatedAddress = await this.address.findByPk(id)

        return updatedAddress
    }

    async delete(data) {
        const { userId, id } = data

        const deletedRows = await this.address.destroy({
            where: { id:id, createdBy: userId }
        })

        if (deletedRows === 0) {
            throw new AppError('Endereço não encontrado ou nada a excluir.', 404);
        }

        return deletedRows
    }
    
}

module.exports = AddressRepository