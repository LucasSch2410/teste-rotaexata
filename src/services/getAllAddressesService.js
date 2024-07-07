const AddressRepository = require('../repositories/addressRepository');
const AppError = require('../utils/AppError');

class GetAllAddresses {

    async execute(data) {
        const addressRepository = new AddressRepository()

        const allAddresses = await addressRepository.getAll(data)

        if (!allAddresses) {
            throw new AppError('Você não tem nenhum endereço.', 400)
        }

        return allAddresses
    }
}

module.exports = GetAllAddresses