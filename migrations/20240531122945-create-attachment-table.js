"use strict";

/** @type {import('sequelize-cli').Migration} */
const {DataTypes} = require("sequelize")
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Attachments", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users", // Make sure this is the table name as Sequelize sees it, case-sensitive
          key: "id",
        },
        onDelete: "CASCADE",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      original_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      encoding: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mimetype: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      relative_path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Attachments");
  },
};
