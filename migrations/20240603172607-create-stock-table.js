'use strict';

/** @type {import('sequelize-cli').Migration} */
const {DataTypes} = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("Stocks" , {
      id :{
        type : DataTypes.UUID, 
        primaryKey : true, 
        allowNull : false,
        defaultValue: DataTypes.UUIDV4,
      }, 
      stock_name :{
        type : Sequelize.CHAR(15), 
        allowNull: false , 
        unique : true , 
        validate :{
          min : 3 , 
          isAlphanumeric : false, 
          isNull : false, 
          isAlpha : true 
        }
      } , 
      company_name :{
        type : Sequelize.STRING(255), 
        allowNull : false, 
        unique : true 
      }, 
      current_price :{
        type : Sequelize.INTEGER, 
        allowNull : false, 
        
      },
      quantity :{
        type : Sequelize.INTEGER, 
        allowNull : false , 
        
      },
      created_at: {
        // Change column name to created_at
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        // Change column name to updated_at
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        onUpdate: "CURRENT_TIMESTAMP", // Automatically update the field on update
      },
    })
},

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Stocks")
  }
};
