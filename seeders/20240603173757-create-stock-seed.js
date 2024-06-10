'use strict';

const { DataTypes } = require('sequelize');
const { v4 : uuidv4} = require('uuid')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Stocks' , [
      {
        id: uuidv4(),
        stock_name : "M&M", 
        company_name : "Mahindra and Mahindra", 
        current_price : 239, 
        quantity : 5000
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Stocks" , null , {})
  }
};
