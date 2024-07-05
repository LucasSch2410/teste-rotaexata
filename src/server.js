const cors = require("cors");
const express = require("express");
const UsersController = require('./controllers/UserController');

const app = express();

const userController = new UsersController()

app.use(express.json());
app.use(cors({
    origin: ["*"],
    credentials: true
}));

// Rota pública inicial.
app.get('/', (req, res) => {
    res.status(200).json({ msg: "Rota inicial da API." })
})

app.post('/user', userController.create)

const PORT = 3333;
app.listen(PORT, () => console.log('Servidor iniciado na porta http://localhost:3333.'))