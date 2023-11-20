import { DataTypes } from "sequelize";
import sequelize from "#app/global/sequelize.js";

const Tag = sequelize.define("Tag", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    unique: true,
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [ 4, 64 ],
    }
  }
});

export default Tag;