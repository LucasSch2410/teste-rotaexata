'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('change_logs', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          action: {
            type: Sequelize.STRING,
            allowNull: false
          },
          entity: {
            type: Sequelize.STRING,
            allowNull: false
          },
          entityId: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          before: {
            type: Sequelize.JSON,
            allowNull: false
          },
          after: {
            type: Sequelize.JSON,
            allowNull: false
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
          }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('change_logs');
  }
};