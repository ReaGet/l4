import PostRepository from "#app/core/repositories/postRepository.js";

class PostController {
  constructor() {
    this.repository = new PostRepository();
  }

  async create(_req, res) {
    const postData = {
      title: `Title ${~~(Math.random() * 1000 + 500)}`,
      description: "Description",
      CategoryId: 1,
      UserId: 1,
    };

    const post = await this.repository.create(postData);
    res.end(JSON.stringify(post));
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const post = await this.repository.findById(id);

      if (!post) {
        res.status(404).end("Post not found");
      } else {
        res.end(JSON.stringify(post));
      }
    } catch(e) {
      console.log("Error while get post", e);
      res.status(500).end("Server Error");
    }
  }

  async getAll(_req, res) {
    try {
      const posts = await this.repository.findAll();

      if (posts.length === 0) {
        res.status(404).end("Posts not found");
      } else {
        res.end(JSON.stringify(posts));
      }
    } catch(e) {
      console.log("Error while get all posts", e);
      res.status(500).end("Server Error");
    }
  }

  async getAllBy(req, res) {
    try {
      const { key, value } = req.params;
      const posts = await this.repository.findAllBy(key, value);

      if (posts.length === 0) {
        res.status(404).end("Posts not found");
      } else {
        res.end(JSON.stringify(posts));
      }
    } catch(e) {
      console.log("Error while get all posts", e);
      res.status(500).end("Server Error");
    }
  }
}

const postController = new PostController();

export default postController;