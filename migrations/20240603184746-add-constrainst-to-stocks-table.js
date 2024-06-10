'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint("Stocks" , {
      fields: ['current_price'], // Specify the fields option
      type: 'check',
      name: 'current_price_non_negative', // Add a name for the constraint
      where: {
        current_price: {
          [Sequelize.Op.gte]: 0
        }
      }
    }), 
    queryInterface.addConstraint("Stocks" , {
      fields : ['quantity'], 
      type : "check",
      name : "quantity_non_negative", 
      where :{
        quantity:{
          [Sequelize.Op.gte] : 0
        }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Stocks', 'current_price_non_negative');
    queryInterface.removeConstraint('Stocks', 'quantity_non_negative');
  }
};
