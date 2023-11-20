import PostRepository from "#app/core/repositories/postRepository.js";

const repository = new PostRepository();

class PostController {
  constructor() { }

  async create(_req, res) {
    const postData = {
      title: `Title ${~~(Math.random() * 1000 + 500)}`,
      description: "Description",
      CategoryId: 1,
      UserId: 1,
    };
    try {
      const post = await repository.create(postData);
      res.end(JSON.stringify(post));
    } catch (e) {
      console.log("Error whilte creating post", e);
      res.status(500).end("Server Error");
    }
  }

  async update(req, res) {}

  async delete(req, res) {}

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const post = await repository.findById(id);

      if (!post) {
        res.status(404).end("Post not found");
      } else {
        res.end(JSON.stringify(post));
      }
    } catch(e) {
      console.log("Error while getting post", e);
      res.status(500).end("Server Error");
    }
  }

  async getAll(_req, res) {
    try {
      const posts = await repository.findAll();

      if (posts.length === 0) {
        res.status(404).end("Posts not found");
      } else {
        res.end(JSON.stringify(posts));
      }
    } catch(e) {
      console.log("Error while getting all posts", e);
      res.status(500).end("Server Error");
    }
  }

  async getAllBy(req, res) {
    try {
      const { key, value } = req.params;
      const posts = await repository.findAllBy(key, value);

      if (posts.length === 0) {
        res.status(404).end("Posts not found");
      } else {
        res.end(JSON.stringify(posts));
      }
    } catch(e) {
      console.log("Error while getting all posts by", e);
      res.status(500).end("Server Error");
    }
  }
}

const postController = new PostController();

export default postController;