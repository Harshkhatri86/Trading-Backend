"use strict";

import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelizeConnection } from "../common/db/init";

interface UserAttributes {
  id?: string;
  name: string;
  userName: string;
  password: string;
  phoneNo: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: string;
  public name!: string;
  public userName!: string;
  public password!: string;
  public phoneNo!: string;
  public email!: string;
  public created_at!: Date;
  public updated_at!: Date;

  static associate() {}
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
        type: DataTypes.STRING(128),
        allowNull: false , 
        validate: {
          is:  /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?/~`-]+$/i,
        },
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phoneNo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        len: [10 , 10], 
        is: /^[0-9]+$/i
      },
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue:  DataTypes.NOW,
      onUpdate: 'CASCADE', // Automatically update the field on update
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: "User",
    tableName: "Users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default User ;