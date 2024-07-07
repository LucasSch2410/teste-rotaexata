require('dotenv').config({path: `${process.cwd()}/.env`})
const express = require("express");
const cors = require("cors");

const catchAsync = require('./utils/catchAsyncErrors');

const AppError = require('./utils/AppError');

const globalErrorHandler = require('./controllers/errorController');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["*"],
    credentials: true
}));

app.use(routes)

app.use("*", catchAsync((err, req, res, next) => {
    throw new AppError(`Rota não encontrada`, 404)
}))

app.use(globalErrorHandler)

const PORT = process.env.APP_PORT;

app.listen(PORT, () => console.log(`Servidor iniciado na porta http://localhost:${PORT}.`))