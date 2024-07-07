const { Sequelize } = require("sequelize")
const sequelize = require("../../config/database")

module.exports = sequelize.define('address', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                message: 'Cep não pode ser nulo.'
            },
            notEmpty: {
                message: 'Cep não pode ser vazio.'
            }
        }
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                message: 'Cidade não pode ser nulo.'
            },
            notEmpty: {
                message: 'Cidade não pode ser vazio.'
            }
        }
    },
    state_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                message: 'Estado não pode ser nulo.'
            },
            notEmpty: {
                message: 'Estado não pode ser vazio.'
            }
        }
    },
    neighborhood: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                message: 'Bairo não pode ser nulo.'
            },
            notEmpty: {
                message: 'Bairo não pode ser vazio.'
            }
        }
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                message: 'Rua não pode ser nula.'
            },
            notEmpty: {
                message: 'Rua não pode ser vazia.'
            }
        }
    },
    number_house: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                message: 'Número não pode ser nulo.'
            },
            notEmpty: {
                message: 'Número não pode ser vazio.'
            }
        }
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    deletedAt: {
        type: Sequelize.DATE,
    },
    createdBy: {
        type: Sequelize.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
}, {
    paranoid: true,
    freezeTableName: true,
    modelName: 'address'
})