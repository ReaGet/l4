import CategoryRepository from "#app/core/repositories/categoryRepository.js";

class CategoryController {
  constructor() {
    this.repository = new CategoryRepository();
  }

  async create(_req, res) {
    const categoryData = {
      title: `Sport ${~~(Math.random() * 1000 + 500)}`,
      url: "/sport",
    };

    try {
      const category = await this.repository.create(categoryData);
      res.end(JSON.stringify(category));
    } catch (e) {
      console.log("Error whilte creating category", e);
      res.status(500).end("Server Error");
    }
  }
  
  async update(req, res) {}

  async delete(req, res) {}

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const category = await this.repository.findById(id);

      if (!category) {
        res.status(404).end("Category not found");
      } else {
        res.end(JSON.stringify(category));
      }
    } catch(e) {
      console.log("Error while getting category", e);
      res.status(500).end("Server Error");
    }
  }

  async getAll(_req, res) {
    try {
      const categories = await this.repository.findAll();

      if (categories.length === 0) {
        res.status(404).end("Categories not found");
      } else {
        res.end(JSON.stringify(categories));
      }
    } catch(e) {
      console.log("Error while getting all categories", e);
      res.status(500).end("Server Error");
    }
  }
}

const categoryController = new CategoryController();

export default categoryController;