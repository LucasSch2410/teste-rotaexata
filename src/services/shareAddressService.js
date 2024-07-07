const jwt = require('jsonwebtoken');
const AddressRepository = require('../repositories/addressRepository');
const AppError = require('../utils/AppError');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

class ShareAddressService {
    async generateShareUrl(userId, id, expirationTime) {
        const token = jwt.sign({ userId, id }, JWT_SECRET_KEY, { expiresIn: expirationTime });
        const shareUrl = `${process.env.BASE_URL}/shared/${token}`;
        return shareUrl;
    }

    async validateAndRetrieveAddress(token) {
        try {
            const decoded = await jwt.verify(token, JWT_SECRET_KEY);

            console.log(decoded)

            const addressRepository = new AddressRepository();
            const address = await addressRepository.findById(decoded);


            if (!address) {
                throw new AppError('Endereço não encontrado.', 404);
            }

            console.log(address)

            return address;
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                throw new AppError('O link de compartilhamento expirou.', 401);
            }
            throw new AppError('Token inválido.', 401);
        }
    }
}

module.exports = ShareAddressService;
