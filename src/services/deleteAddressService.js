const ChangeLogRepository = require('../repositories/changeLogRepository');
const AddressRepository = require('../repositories/addressRepository');
const AppError = require('../utils/AppError');

class CreateAddressService {

    async execute(data) {
        const addressRepository = new AddressRepository()
        const changeLogRepository = new ChangeLogRepository();

        const addressToDelete = await addressRepository.findById(data)

        if (!addressToDelete) {
            throw new AppError('Endereço não encontrado.', 500)
        }

        const address = await addressRepository.delete(data)

        if (!address) {
            throw new AppError('Erro ao excluir o endereço.', 500)
        }

        await changeLogRepository.save({
            userId: data.userId,
            action: 'DELETE',
            entity: 'address',
            entityId: data.id,
            before: addressToDelete.toJSON(),
            after: {}
          });

        return addressToDelete
    }
}

module.exports = CreateAddressService