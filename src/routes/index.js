const { Router } = require("express")

const userRouter = require("./user.routes")
const addressRouter = require("./address.routes")
const authRouter = require("./auth.routes")

const routes = Router()

routes.use("/user", userRouter)
routes.use("/login", authRouter)
routes.use("/addresses", addressRouter)

module.exports = routes