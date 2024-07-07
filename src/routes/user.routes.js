const { Router } = require("express");
const UserController = require("../controllers/userController")

const userRoutes = Router();

const usersController = new UserController();

userRoutes.post("/", usersController.signUp)

module.exports = userRoutes;