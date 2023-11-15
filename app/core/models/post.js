import { DataTypes } from "sequelize";
import sequelize from "#app/global/sequelize.js";
import User from "./user.js";
import Category from "./category.js";
import Tag from "./tag.js";

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
  }
});

Post.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  }
});
User.hasMany(Post);


Post.belongsTo(Category, {
  foreignKey: {
    allowNull: false,
  }
});
Category.hasMany(Post);

// Post.belongsToMany(Tag, { through: "Post_Tag" });
// Tag.belongsToMany(Post, { through: "Post_Tag" });

export default Post;