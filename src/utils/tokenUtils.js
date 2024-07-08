const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');

const JWT_SECRET = process.env.JWT_SECRET

const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET)
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            throw new AppError('O link de compartilhamento expirou.', 401)
        }
        throw new AppError('Token inválido.', 401)
    }
};

module.exports = {
    verifyToken
}
