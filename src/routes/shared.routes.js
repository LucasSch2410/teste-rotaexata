
const { Router } = require("express");
const ShareAddressController = require('../controllers/shareAddressController');

const sharedRoutes = Router();

const sharedAddressController = new ShareAddressController();

sharedRoutes.get("/:token", sharedAddressController.accessShared)

module.exports = sharedRoutes;