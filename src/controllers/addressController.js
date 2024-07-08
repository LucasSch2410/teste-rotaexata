const CreateAddressService = require('../services/createAddressService');
const GetAllAddressesService = require('../services/getAllAddressesService')
const UpdateAddressService = require('../services/updateAddressService')
const DeleteAddressService = require('../services/deleteAddressService')

class AddressController {
    async create(req, res, next) {
        try {
            const userId = req.user.id;
            const requestData = req.body;

            const data = {
                createdBy: userId,
                ...requestData
            };

            const createAddressService = new CreateAddressService()
            const address = await createAddressService.execute(data)

            const result = {
                status: "success",
                data: address
            }
    
            return res.status(201).json(result)
        } catch (error) {
            next(error, req, res, next)
        }
    }

    async read(req, res, next) {
        try {
            const userId = req.user.id;
            const keyword = req.query.keyword || '';

            const data = {
                userId: userId,
                keyword: keyword
            };

            const getAllAddresses = new GetAllAddressesService()
            const addresses = await getAllAddresses.execute(data)

            const result = {
                status: "success",
                data: addresses
            }

            return res.status(200).json(result)
            
        } catch (error) {
            next(error, req, res, next)
        }
    }

    async update(req, res, next) {
        try {
            const userId = req.user.id;
            const addressId = req.params.id;
            const requestData = req.body;

            const data = {
                userId: userId,
                id: addressId,
                ...requestData
            }

            const updateAddressService = new UpdateAddressService()
            const updatedAddress = await updateAddressService.execute(data);

            const result = {
                status: "success",
                data: updatedAddress
            };

            return res.status(200).json(result);

        } catch (error) {
            next(error, req, res, next)
        }
    }

    async delete(req, res, next) {
        try {
            const userId = req.user.id
            const addressId = req.params.id

            const data = { userId, id: addressId }

            const deleteAddressService = new DeleteAddressService()
            const deletedAddress = await deleteAddressService.execute(data)

            const result = { status: "success" }

            return res.status(200).json(result)

        } catch (error) {
            next(error, req, res, next)
        }
    }
}

module.exports = AddressController