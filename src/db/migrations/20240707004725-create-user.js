'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
            notNull: {
                message: 'Usuário não pode ser nulo.'
            },
            notEmpty: {
                message: 'Usuário não pode ser vazio.'
            }
        }
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            notNull: {
                message: 'Senha não pode ser nula.'
            },
            notEmpty: {
                message: 'Senha não pode ser vazia.'
            }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};