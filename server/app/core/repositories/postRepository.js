import Post from "../models/post.js";
import User from "../models/user.js";
import Category from "../models/category.js";
import Tag from "../models/tag.js";

export default class PostRepository {
  async create(postData) {
    return await Post.create(postData);
  }
  
  async remove(id) {
    await Post.destroy({
      where: {
        id,
      },
    });
  }

  async update() {}

  async findById(id) {
    return await Post.findByPk(id);
  }

  async findAllBy(key, value) {
    return await Post.findAll({
      where: {
        [key]: value,
      },
      include: [
        User,
        Category,
        // Tag
      ]
    });
  }

  async findAll() {
    return await Post.findAll({
      include: [
        User,
        Category,
        // Tag
      ]
    });
  }
}