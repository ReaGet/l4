import Category from "../models/category.js";

export default class CategoryRepository {
  async create(categoryData) {
    return await Category.create(categoryData);
  }
  
  async remove(id) {
    await Category.destroy({
      where: {
        id,
      },
    });
  }

  async update(id, categoryData) {}

  async findById(id) {
    return await Category.findByPk(id);
  }

  async findAll() {
    return await Category.findAll();
  }
}