'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users' , {
      id : {
        allowNull: false , 
        primaryKey : true , 
        type : Sequelize.UUID
      } , 
      name : {
        type : Sequelize.STRING , 
        allowNull: false , 
      },
      userName : {
        type: Sequelize.STRING , 
        allowNull: false
      }, 
      password : {
        type: Sequelize.STRING , 
        allowNull: false
      },
      email : {
        type: Sequelize.STRING , 
        allowNull: false
      }, 
      phoneNo : {
        type: Sequelize.STRING , 
        allowNull: false
      }, 
      
      created_at: { // Change column name to created_at
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: { // Change column name to updated_at
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: 'CURRENT_TIMESTAMP', // Automatically update the field on update
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users')
  }
};
