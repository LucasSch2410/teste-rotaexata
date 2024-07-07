const ChangeLogRepository = require('../repositories/changeLogRepository');
const AddressRepository = require('../repositories/addressRepository');
const AppError = require('../utils/AppError');

class UpdateAddressService {

    async execute(data) {
        const addressRepository = new AddressRepository()
        const changeLogRepository = new ChangeLogRepository()

        const oldAddress = await addressRepository.findById(data)
        const updatedAddress = await addressRepository.update(data)

        if (!updatedAddress || !oldAddress) {
            throw new AppError('Falha ao atualizar o endereço.', 500)
        }
        
        await changeLogRepository.save({
            userId: data.userId,
            action: 'UPDATE',
            entity: 'address',
            entityId: data.id,
            before: oldAddress.toJSON(),
            after: updatedAddress.toJSON()
        })

        return updatedAddress
    }
}

module.exports = UpdateAddressService