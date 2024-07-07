
const { Router } = require("express");
const AddressController = require("../controllers/addressController")
const AuthenticationController = require("../controllers/authController")
const ShareAddressController = require('../controllers/shareAddressController');

const addressRoutes = Router();

const addressController = new AddressController();
const authenticationController = new AuthenticationController();
const shareAddressController = new ShareAddressController()

addressRoutes.get("/", authenticationController.authentication, addressController.read)
addressRoutes.post("/", authenticationController.authentication, addressController.create)
addressRoutes.put("/:id", authenticationController.authentication, addressController.update)
addressRoutes.delete("/:id", authenticationController.authentication, addressController.delete)

addressRoutes.post("/:id/share", authenticationController.authentication, shareAddressController.share)

module.exports = addressRoutes;