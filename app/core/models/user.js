import { DataTypes } from "sequelize";
import sequelize from "#app/global/sequelize.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    login: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    }
  },
  {
    defaultScope: {
      attributes: {
        exclude: ["login", "password"],
      },
    },
  }
);

export default User;