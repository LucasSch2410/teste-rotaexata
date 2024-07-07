const UserRepository = require('../repositories/userRepository');
const AddressRepository = require('../repositories/addressRepository');
const AppError = require('../utils/AppError');

class CreateAddressService {

    async execute(data) {
        const addressRepository = new AddressRepository()

        const newAddress = addressRepository.save(data)

        if (!newAddress) {
            throw new AppError('Falha ao criar o endereço.', 500)
        }

        return newAddress
    }
}

module.exports = CreateAddressService