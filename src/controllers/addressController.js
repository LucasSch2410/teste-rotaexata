const CreateAddressService = require('../services/createAddressService');

class AddressController {
    async create(req, res, next) {
        try {
            const data = req.body

            const createAddressService = new CreateAddressService()
            const result = await createAddressService.execute(data)
    
            return res.status(201).json(result)
        } catch (error) {
            next(error, req, res, next)
        }
    }

    async read(req, res, next) {
        try {
        } catch (error) {
            next(error, req, res, next)
        }
    }

    async update(req, res, next) {
        try {
        } catch (error) {
            next(error, req, res, next)
        }
    }

    async delete(req, res, next) {
        try {
        } catch (error) {
            next(error, req, res, next)
        }
    }
}

module.exports = AddressController