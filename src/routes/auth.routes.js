const { Router } = require("express");
const AuthController = require("../controllers/authController")

const authRoutes = Router();

const authController = new AuthController();

authRoutes.post("/", authController.login)

module.exports = authRoutes;