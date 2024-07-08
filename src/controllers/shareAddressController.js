const ShareAddressService = require('../services/shareAddressService');
const AddressRepository = require('../repositories/addressRepository');
const AppError = require('../utils/appError');

class ShareAddressController {
    async share(req, res, next) {
        try {
            const userId = req.user.id
            const id = req.params.id
            const { expirationTime = "1D" } = req.body

            const shareAddressService = new ShareAddressService()
            const addressRepository = new AddressRepository()

            const userData = {
                userId,
                id
            }

            const verifyAddressOwner = await addressRepository.findById(userData)

            if (!verifyAddressOwner) {
                next(new AppError('Este endereço não existe ou não pertence a você.', 400))
            }

            const shareUrl = await shareAddressService.generateShareUrl(userId, id, expirationTime)

            const result = {
                status: "success",
                url: shareUrl
            };

            return res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    async accessShared(req, res, next) {
        try {
            const { token } = req.params;
            const shareAddressService = new ShareAddressService();
            const addressDetails = await shareAddressService.validateAndRetrieveAddress(token);

            const result = {
                status: "success",
                data: addressDetails
            };

            return res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ShareAddressController;
