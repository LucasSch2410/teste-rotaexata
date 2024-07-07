
const { Router } = require("express");
const AddressController = require("../controllers/addressController")

const addressRoutes = Router();

const addressController = new AddressController();

addressRoutes.post("/", addressController.create)

module.exports = addressRoutes;