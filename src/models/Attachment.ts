"use strict";
import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelizeConnection } from "../common/db/init";
import { User } from "../models";

export interface AttachmentsAttributes {
  id?: string;
  name: string;
  user_id: string;
  original_name: string;
  encoding: string;
  mimetype: string;
  size: number;
  url: string;
  relative_path: string;
  created_at?: Date;
  updated_at?: Date;
}

class Attachments
  extends Model<AttachmentsAttributes>
  implements AttachmentsAttributes
{
  public id!: string;
  public name!: string;
  public user_id!: string;
  public original_name!: string;
  public encoding!: string;
  public mimetype!: string;
  public size!: number;
  public url!: string;
  public relative_path!: string;
  public created_at!: Date;
  public updated_at!: Date;

  static associate() {
    // define association here
    Attachments.belongsTo(User, { as: "user", foreignKey: "user_id" });
  }
}

Attachments.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: User,
        key: "id",
      },
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
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      onUpdate: "CURRENT_TIMESTAMP", // Automatically update the field on update
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: "Attachment",
    tableName: "Attachments",
    timestamps: true, // Enable automatic timestamps
    createdAt: "created_at", // Map createdAt to created_at field
    updatedAt: "updated_at", // Map updatedAt to updated_at field
  }
);

export default Attachments;
