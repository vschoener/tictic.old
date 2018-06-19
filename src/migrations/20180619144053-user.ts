import * as Sequelize from 'sequelize';

export default {
  up: async (queryInterface: Sequelize.QueryInterface, sql: Sequelize.Sequelize) => {
    return await queryInterface.createTable('users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: Sequelize.STRING,
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    return await queryInterface.dropTable('users');
  }
};
