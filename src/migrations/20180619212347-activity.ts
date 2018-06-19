import * as Sequelize from 'sequelize';

export default {
  up: async (queryInterface: Sequelize.QueryInterface, sql: Sequelize.Sequelize) => {
    return await queryInterface.createTable('activities', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      type: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    return await queryInterface.dropTable('activities');
  }
};
